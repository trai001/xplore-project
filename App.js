// import * as React from 'react';
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './Login';
// import Forgot from './Forgot';
// import HomeScreen from './HomeScreen';
// import App from '../App';



// const initialState={
//   action: "",
//   name: "",
// };

// const reducer =(state = initialState,action) =>{
//   switch (action.type){
//     case "OPEN_MENU":
//       return{action: "openMenu"};
//     case "CLOSE_MENU":
//       return{ action:"closeMenu"};
//     case "UPDATE_NAME":
//       return{ name: action.name};
//     default:
//       return state;
//   }

// };

// const store = createStore(reducer);
// const App =()=>(
//   <Provider store={store}>
//     <HomeScreen />
//   </Provider>
// );

// export default App;




















import * as React from 'react';
import "react-native-gesture-handler";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigator/AppNavigator';



const initialState={
  action: "",
  name: "",
};

const reducer =(state = initialState,action) =>{
  switch (action.type){
    case "OPEN_MENU":
      return{action: "openMenu"};
    case "CLOSE_MENU":
      return{ action:"closeMenu"};
    case "UPDATE_NAME":
      return{ name: action.name};
    case "OPEN_LOGIN ":
      return { action: "openLogin"};
    case "CLOSE_LOGIN":
      return {action : "closeLogin"}; 
      default:
      return state;
  }

};

const store = createStore(reducer);

const App=()=>(
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
  



export default App;



