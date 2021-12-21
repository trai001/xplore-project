import React from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";

function mapStateToProps(state){
  return{
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return{
    updateName:name => dispatch({
      type: "UPDATE_NAME",
      name:name
    })
  }
}

class Avatar extends React.Component{
  state={
    photo: "https://cl.ly/55da82beb939/downlaod/avatar-default.jpg"
  };

     componentDidMount() {
        fetch("https://uifaces.co/api?limit=1&random/gender=female",{
           headers: new Headers ({
            "X-API-KEY": "eeaafbe81657073cd70ac6e3de1bd6"
            })
        })
          .then(response => response.json())
          .then(response => {
            console.log(response);
            
            this.setState({
             photo:response[0].photo
            });
            this.props.updateName(response[0].name);
    });
  }

  render() {
    return <Image source={{uri: this.state.photo}} />
    
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Avatar);

const Image  = styled.Image`
width: 48px;
height: 48px;
border-radius: 24px;

`;