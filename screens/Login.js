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




export default function AppNavigator({navigation}) {
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
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="password"
          placeholderTextColor="rgba(0,0,0,1)"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

     
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} 
      style={styles.loginBtn}>
      <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}
      style={styles.forgot_button}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
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
    marginBottom: 20,
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
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    //backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },

forgotText:{
  color: "#000000"
},
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  loginText:{
    color: "#FFFFFF"
  },
  xplore: {
  marginBottom:50
  }
});












// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import * as firebase from '@react-native-firebase/app';
// import {Form,Button,Card} from 'react-bootstrap';



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDknYAfhPaTxjpHRfyGrZIFUZKy5C-i2ZQ",
//   authDomain: "xplore-3d9c6.firebaseapp.com",
//   projectId: "xplore-3d9c6",
//   storageBucket: "xplore-3d9c6.appspot.com",
//   messagingSenderId: "180626464121",
//   appId: "1:180626464121:web:8603517b6f5e40291b63a8",
//   measurementId: "G-TDLNNRTTWG"
// };

// // Initialize Firebase
// if(!firebase.apps.length){
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// }







// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }

















