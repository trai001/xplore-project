import React from "react";
import styled from "styled-components";


class PopularScreen extends React.Component{
  static navigationOptions ={
    header: null
  };

  render(){
    return(
      <Container>
        <Text>Popular Screen</Text>
      </Container>
    )
  }
}

export default PopularScreen;

const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
`; 