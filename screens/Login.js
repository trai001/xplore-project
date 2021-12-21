import React from "react";
import styled from "styled-components";
import {TouchableOpacity} from "react-native";
import {BlurView} from "expo";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Success from "../components/Success";
import Loading from "../components/Loading";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    isSuccess:false,
    isLoading:false,
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);
    this.setState({isLoading: true });
    setTimeout(() => {
      // Stop loading and show success
      this.setState({ isLoading: false });
      this.setState({ isSuccess: true });
    }, 2000);
  };


  focusEmail = () => {
    this.setState({
      iconEmail: require("../assets/icon-email-animated.gif"),
      iconPassword: require("../assets/icon-password.png")
    });
  };
  focusPassword = () => {
    this.setState({
      iconEmail: require("../assets/icon-email.png"),
      iconPassword: require("../assets/icon-password-animated.gif")
    });
  };


  tapBackground = () => {
    Keyboard.dismiss();
  };


  render() {
    return (
      <Container>
        {/* <TouchableWithoutFeedback onPress={this.tapBackground}>
        <BlurView tint="default" intensity={90} 
        style={{ position: "absolute",width: "100%",height: "100%"
        }}/>
        </TouchableWithoutFeedback> */}
        <Modal>
          <Logo source={require("../assets/Logo.png")} />
          <Text>Start Xploring</Text>
          <TextInput
  onChangeText={email => this.setState({ email })}
  placeholder="Email"
  value={this.state.email}
  keyboardType="email-address"
  onFocus={this.focusEmail}
/>
<TextInput
  onChangeText={password => this.setState({ password })}
  placeholder="Password"
  value={this.state.password}
  secureTextEntry={true}
  onFocus={this.focusPassword}

/>

          <IconEmail source={this.state.iconEmail} />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
             <ButtonView>
             <ButtonText>Log in</ButtonText>
             </ButtonView>
          </TouchableOpacity>
        </Modal>
        <Success isActive={this.state.isSuccess} />
        <Loading isActive={this.state.isLoading} />
      </Container>
    );
  }
}

export default Login;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  padding-left: 44px;
  margin-top: 20px;
`;

const Modal = styled.View`
  width: 335px;
  height: 370px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 170px;
  height: 44px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  color: #b8bece;
  text-align: center;
`;

const ButtonView = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 165px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 225px;
  left: 35px;
`;








// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// import { NavigationContainer } from '@react-navigation/native';
//  import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from "./HomeScreen";




// export default function AppNavigator({navigation}) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   return (
  
//     <View style={styles.container}>
//       <ImageBackground
//             source={require('../assets/background_splash.png')}
//        style={styles.background} 

//       />
//    <Image 
//   style={styles.xplore} 
//   source={require('../assets/Logo.png')}

// />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="email"
//           placeholderTextColor="rgba(0,0,0,1)"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>
 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="password"
//           placeholderTextColor="rgba(0,0,0,1)"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>

     
//       <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} 
//       style={styles.loginBtn}>
//       <Text style={styles.loginText}>Login</Text>
//       </TouchableOpacity>
 
//       <TouchableOpacity onPress={() => navigation.navigate('Forgot')}
//       style={styles.forgot_button}>
//         <Text style={styles.forgotText}>Forgot Password?</Text>
//       </TouchableOpacity>

     
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center"
//   },

//   background:{
//     //width: null,
//     //height: null,
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     resizeMode: 'stretch',
          
//   },
 
//   inputView: {
//     backgroundColor: "#D3D3D3",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     borderRadius: 5,
//     paddingLeft: 16,
//     paddingRight: 16
//   },
 
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     flexDirection: "row",
//     borderRadius: 5,
//     paddingLeft: 16,
//     paddingRight: 16
//   },
 
//   forgot_button: {
//     width: "70%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     //backgroundColor: "rgba(0,0,0,1)",
//     flexDirection: "row",
//     borderRadius: 5,
//     paddingLeft: 16,
//     paddingRight: 16
//   },

// forgotText:{
//   color: "#000000"
// },
 
//   loginBtn: {
//     width: "70%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "rgba(0,0,0,1)",
//     flexDirection: "row",
//     borderRadius: 5,
//     paddingLeft: 16,
//     paddingRight: 16
//   },
//   loginText:{
//     color: "#FFFFFF"
//   },
//   xplore: {
//   marginBottom:50
//   }
// });
