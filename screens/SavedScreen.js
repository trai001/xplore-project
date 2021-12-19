import React from "react";
import styled from "styled-components";


class SavedScreen extends React.Component{
  static navigationOptions ={
    header: null
  };

  render(){
    return(
      <Container>
        <Text>Saved Screen</Text>
      </Container>
    )
  }
}

export default SavedScreen;

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
`; 