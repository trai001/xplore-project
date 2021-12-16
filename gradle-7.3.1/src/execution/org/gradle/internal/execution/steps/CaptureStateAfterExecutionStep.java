/*
 * Copyright 2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradle.internal.execution.steps;

import com.google.common.collect.ImmutableSortedMap;
import org.gradle.caching.internal.origin.OriginMetadata;
import org.gradle.internal.Try;
import org.gradle.internal.execution.ExecutionResult;
import org.gradle.internal.execution.OutputSnapshotter;
import org.gradle.internal.execution.UnitOfWork;
import org.gradle.internal.execution.history.AfterExecutionState;
import org.gradle.internal.execution.history.BeforeExecutionState;
import org.gradle.internal.execution.history.PreviousExecutionState;
import org.gradle.internal.execution.history.impl.DefaultAfterExecutionState;
import org.gradle.internal.id.UniqueId;
import org.gradle.internal.operations.BuildOperationDescriptor;
import org.gradle.internal.operations.BuildOperationExecutor;
import org.gradle.internal.operations.BuildOperationType;
import org.gradle.internal.snapshot.FileSystemSnapshot;
import org.gradle.internal.time.Time;
import org.gradle.internal.time.Timer;

import java.time.Duration;
import java.util.Optional;

import static org.gradle.internal.execution.history.impl.OutputSnapshotUtil.filterOutputsAfterExecution;

public class CaptureStateAfterExecutionStep<C extends BeforeExecutionContext> extends BuildOperationStep<C, CurrentSnapshotResult> {
    private final UniqueId buildInvocationScopeId;
    private final OutputSnapshotter outputSnapshotter;
    private final Step<? super C, ? extends Result> delegate;

    public CaptureStateAfterExecutionStep(
        BuildOperationExecutor buildOperationExecutor,
        UniqueId buildInvocationScopeId,
        OutputSnapshotter outputSnapshotter,
        Step<? super C, ? extends Result> delegate
    ) {
        super(buildOperationExecutor);
        this.buildInvocationScopeId = buildInvocationScopeId;
        this.outputSnapshotter = outputSnapshotter;
        this.delegate = delegate;
    }

    @Override
    public CurrentSnapshotResult execute(UnitOfWork work, C context) {
        Result result = delegate.execute(work, context);
        Timer timer = Time.startTimer();
        Optional<AfterExecutionState> afterExecutionState = context.getBeforeExecutionState()
            .flatMap(beforeExecutionState -> captureStateAfterExecution(work, context, beforeExecutionState));
        long snapshotOutputDuration = timer.getElapsedMillis();

        // The origin execution time is recorded as “work duration” + “output snapshotting duration”,
        // As this is _roughly_ the amount of time that is avoided by reusing the outputs,
        // which is currently the _only_ thing this value is used for.
        Duration duration = result.getDuration();
        Duration originExecutionTime = duration.plus(Duration.ofMillis(snapshotOutputDuration));

        OriginMetadata originMetadata = new OriginMetadata(buildInvocationScopeId.asString(), originExecutionTime);

        return new CurrentSnapshotResult() {
            @Override
            public Optional<AfterExecutionState> getAfterExecutionState() {
                return afterExecutionState;
            }

            @Override
            public OriginMetadata getOriginMetadata() {
                return originMetadata;
            }

            @Override
            public Try<ExecutionResult> getExecutionResult() {
                return result.getExecutionResult();
            }

            @Override
            public Duration getDuration() {
                return duration;
            }

            @Override
            public boolean isReused() {
                return false;
            }
        };
    }

    private Optional<AfterExecutionState> captureStateAfterExecution(UnitOfWork work, BeforeExecutionContext context, BeforeExecutionState beforeExecutionState) {
        return operation(
            operationContext -> {
                try {
                    ImmutableSortedMap<String, FileSystemSnapshot> outputsProducedByWork = captureOutputs(work, context, beforeExecutionState);
                    AfterExecutionState afterExecutionState = new DefaultAfterExecutionState(beforeExecutionState, outputsProducedByWork);
                    operationContext.setResult(Operation.Result.INSTANCE);
                    return Optional.of(afterExecutionState);
                } catch (OutputSnapshotter.OutputFileSnapshottingException e) {
                    work.handleUnreadableOutputs(e);
                    operationContext.setResult(Operation.Result.INSTANCE);
                    return Optional.empty();
                }
            },
            BuildOperationDescriptor
                .displayName("Snapshot outputs after executing " + work.getDisplayName())
                .details(Operation.Details.INSTANCE)
        );
    }

    private ImmutableSortedMap<String, FileSystemSnapshot> captureOutputs(UnitOfWork work, BeforeExecutionContext context, BeforeExecutionState beforeExecutionState) {
        ImmutableSortedMap<String, FileSystemSnapshot> unfilteredOutputSnapshotsAfterExecution = outputSnapshotter.snapshotOutputs(work, context.getWorkspace());

        if (beforeExecutionState.getDetectedOverlappingOutputs().isPresent()) {
            ImmutableSortedMap<String, FileSystemSnapshot> previousExecutionOutputSnapshots = context.getPreviousExecutionState()
                .map(PreviousExecutionState::getOutputFilesProducedByWork)
                .orElse(ImmutableSortedMap.of());

            ImmutableSortedMap<String, FileSystemSnapshot> unfilteredOutputSnapshotsBeforeExecution = context.getBeforeExecutionState()
                .map(BeforeExecutionState::getOutputFileLocationSnapshots)
                .orElse(ImmutableSortedMap.of());

            return filterOutputsAfterExecution(previousExecutionOutputSnapshots, unfilteredOutputSnapshotsBeforeExecution, unfilteredOutputSnapshotsAfterExecution);
        } else {
            return unfilteredOutputSnapshotsAfterExecution;
        }
    }

    /*
     * This operation is only used here temporarily. Should be replaced with a more stable operation in the long term.
     */
    public interface Operation extends BuildOperationType<Operation.Details, Operation.Result> {
        interface Details {
            Details INSTANCE = new Details() {
            };
        }

        interface Result {
            Result INSTANCE = new Result() {
            };
        }
    }
}
