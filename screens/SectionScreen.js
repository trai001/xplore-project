import React from "react";
import { Button } from "react-native";
import styled from "styled-components";


class SectionScreen extends React.Component{
  static navigationOptions ={
    header: null
  };

  render(){
    return(
      <Container>
        <Text>Section Screen</Text>
        <Button title = "Close" onPress={()  => {
          this.props.navigation.goBack();
        }} />
      </Container>
    )
  }
}

export default SectionScreen;

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
`; 