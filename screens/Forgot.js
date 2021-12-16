import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
       <ImageBackground
            source={require('../assets/background_splash.png')}
       style={styles.background} 

      />
      <Image
        style={styles.xplore}
        source={require('../assets/Logo.png')}
      />
  

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email"
          placeholderTextColor="rgba(0,0,0,1)"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <Text style={{ fontFamily: 'sans-serif',fontSize:12, fontWeight:'bold', color:'#b19cd9'}}>  
  Enter your email to get a link to reset your password.
</Text>

      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  background:{
    //width: null,
    //height: null,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
          
  },
 
 
  inputView: {
    backgroundColor: "#D3D3D3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: -70,
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
 
  forgot_button: {
    height: 30,
    marginTop: 40
  },
 
  sendBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  sendText:{
    color: "#FFFFFF"
  },
  xplore: {
    marginBottom:50
  }
});

