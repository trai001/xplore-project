import React from "react";
import styled from "styled-components/native";
import {Animated,TouchableOpacity,Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {action: state.action}
}

function mapDispatchToProps(dispatch){
    return {
        closeMenu:() => dispatch({
            type:"CLOSE_MENU"
        })
    }
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component{
    state={
        top:new Animated.Value(screenHeight)
    };

    componentDidMount(){
        this.toggleMenu();
        
    }

    componentDidUpdate(){
        this.toggleMenu();
    }

    toggleMenu=() =>{
        if(this.props.action=="openMenu"){
            Animated.spring(this.state.top, {
                toValue:58
            }).start();
        }
       
        if(this.props.action== "closeMenu"){
            Animated.spring(this.state.top,{
                toValue:screenHeight
            }).start();
        }
    };

    render(){
        return(
            <AnimatedContainer style={{top:this.state.top}}> 
                <Cover>
                    <Image source={require('../assets/background_splash.png')}/>
                    <Title> Sikha Bista </Title>
                    <Subtitle> User </Subtitle>
                </Cover>
                <TouchableOpacity 
                   onPress={this.props.closeMenu} 
                   style={{
                     position:"absolute",
                     top:120,
                     left:"50%",
                     marginLeft:-22,
                     zIndex:1
                    }}
                >
                 <CloseView>
                   <Ionicons name ="close" size={44} color="#546bfb"/>
                 </CloseView>
                </TouchableOpacity>
                <Content>
                    {item.map((item,index) => (
                        <MenuItem 
                        key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        text={item.text}
                        />
                    ))}

                </Content>
            </AnimatedContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);



const Image = styled.Image`
width: 100%;
height: 100%;
position: absolute;
`;

const Title = styled.Text`
color: white;
font-size: 24px;
font-weight: 600;
`;

const Subtitle = styled.Text`
color: rgba(255,255,255,0.5);
font-size: 14px;
font-weight: 600;
margin-top: 8px;
`;

const CloseView= styled.View`
   width:44px;
   height:44px;
   border-radius:22px;
   background:white;
   justify-content:center;
   align-items:center;
   box-shadow: 0 5px 10px rgba(0,0,0, 0.15);
`;


const Container = styled.View`
position:absolute;
background: white;
width: 100%;
height: 100%;
z-index:100;
border-radius:10px;
overflow: hidden;
`;
const AnimatedContainer= Animated.createAnimatedComponent(Container)


const Cover = styled.View`
height: 142px;
background:black;
justify-content: center;
align-items:center;
`;

const Content = styled.View`
height: ${screenHeight} ;
background: #f0f3f5;
padding: 50px;
`;

const item = [
    {
        icon : "settings",
        title: "Account",
        text: "Settings"
    },
    {
        icon : "card",
        title: "Billing",
        text: "Payments"
    },
    {
        icon :"exit",
        title: "Log Out",
        text: "See you soon!"
    }
]




// const Logo = styled.Image`
// width: 44px;
// height: 44px;
// `;

// const Caption = styled.Text`
// color: #006D77;
// font-weight: 600;
// font-size: 14px;
// text-transform: uppercase;
// `;


// const Wrapper = styled.Text`
// margin-left: 10px;
// `;


