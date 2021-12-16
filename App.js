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
    default:
      return state;
  }

};

const store = createStore(reducer);

const App=()=>(
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;



































// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { ScrollView, SafeAreaView } from "react-native";
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
// import styled from "styled-components/native";
// import Logo from "./screens/Logo";
// import Items from "./screens/Items";




// /* Add onto later 
// // Screen Imports
// import HomeScreen from "./screens/HomeScreen"; */

// export default class App extends 
// React.Component {
//   render() {
//     return (
//       <Container>
//         {/* <View style={styles.container}>
//        {/* <ImageBackground
//             source={require('../assets/background_splash.png')}
//        style={styles.background} />
//         </View> */} 

//         <SafeAreaView>
//         <ScrollView style={{ height: "100%" }}>
//         <TitleBar>
//           <Avatar source={require("./assets/avatar-default.jpg")} />
//           <Title>Welcome back,</Title>
//           <Name>Sikha</Name>
//         </TitleBar>
//         <ScrollView 
//         style={{ 
//           flexDirection: "row", 
//           padding: 20, 
//           paddingLeft: 12,
//           paddingTop: 30 
//         }} 
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         >
//           {logos.map((logo, index) => (
//         <Logo 
//         key={index}
//         image={logo.image}
//         text={logo.text} />
//           ))}
//         </ScrollView>
//         <Subtitle>New Activities</Subtitle>
//         <ScrollView 
//         horizontal={true} 
//         style={{ paddingBottom: 30 }} 
//         showsHorizontalScrollIndicator={false}
//         >
//         {items.map((items, index) => (
//         <Items 
//         key= {index}
//         title= {items.title}
//         image={items.image}
//         caption={items.caption}
//         logo={items.logo}
//         subtitle={items.subtitle}
//       />
//         ))}
//         </ScrollView>
//         <Subtitle>Newest Additions</Subtitle>
//         {saved.map((saved, index) => (
//         <Saved
//         key= {index}
//         title= {saved.title}
//         image={saved.image}
//         caption={saved.caption}
//         logo={saved.logo}
//         subtitle={saved.subtitle}
//         />
//         ))}
//         </ScrollView>
//         </SafeAreaView>
//       </Container>
//     );
//   }
// }



// const Subtitle = styled.Text`
// color: #000000;
// font-weight: 600;
// font-size: 16px;
// margin-left: 20px;
// margin-top: 20px;
// text-transform: uppercase; //transforms entire subtitle to all uppercase
// `;


// const Avatar = styled.Image`   
// width: 44px;
// height: 44px;
// background: black;
// border-radius: 22px;
// margin-left: 20px;
// position: absolute;
// top: 0;
// left: 0;
// `;


 
//  const Container = styled.View`
//   flex: 1;
//   background-color: #EDF6F9;
//   `;

//   const Title = styled.Text`
//   font-size: 18px;
//   color: black;
//   font-weight: 500;
//   `;

//   const Name = styled.Text`
//   font-size: 20px;
//   color: #e29578;
//   font-weight: bold;
//   `;

//   const TitleBar = styled.View`
//   width: 100%;
//   margin-top: 50px;
//   padding-left: 80px;
//   `;

//   const styles = StyleSheet.create({
//     container: {
//      flex: 1,
//     backgroundColor: "#fff",
//        alignItems: "center",
//        justifyContent: "center",
//        textAlign: "center"
//      },
  
//    background:{
//     position: 'absolute',
//        top: 0,
//        bottom: 0,
//        left: 0,
//        right: 0,
//      resizeMode: 'stretch'
//    })
      

//   const logos = [
//     {
//       image: require("./assets/family.png"),
//       text: "Family"
//     },
//     {
//       image: require("./assets/night.png"),
//       text: "Nighttime"
//     },
//     {
//       image: require("./assets/bday.png"),
//       text: "Birthdays"
//     },
//     {
//       image: require("./assets/selfcare.png"),
//       text: "Self Care"
//     },
//     {image: require("./assets/date.png"),
//     text: "Dates"
//     }
//   ];


//   const items = [
//     {
//       title: "Massages in the Upper East Side",
//       image: require("./assets/massage.jpg"),
//       subtitle: " Treat yourself to a well deserved you day ",
//       caption: "Self Care:",
//       logo: require("./assets/selfcare.png")
//     },
//     {
//       title: "Museum of Ice Cream",
//       image: require("./assets/museum-of-icecream.jpg"),
//       subtitle: "The cherry on top for your special day ",
//       caption: "Birthdays:",
//       logo: require("./assets/bday.png")
//     },
//     {
//       title: "Karaoke in K-Town",
//       image: require("./assets/karaoke.jpg"),
//       subtitle: "Let your inner rockstar out",
//       caption: "Nighttime:",
//       logo: require("./assets/night.png")
//     },
//     {
//       title: "Paint and Sip in Chelsea",
//       image: require("./assets/paint-and-sip.jpg"),
//       subtitle: "Fun date night idea",
//       caption: "Dates:",
//       logo: require("./assets/date.png")
//     },
//     {
//       title: "Family Fun at Morgan Library",
//       image: require("./assets/morgan-library.jpg"),
//       subtitle: "Holiday readings at the Morgan Library",
//       caption: "Family:",
//       logo: require("./assets/family.png")
//     }
//   ];

//   const saved = [
//     {
      
//     }
//   ]

  










// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Forgot" component={Forgot} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }













// // // import { StatusBar } from "expo-status-bar";
// // // import React from "react";
// // // import { ScrollView, SafeAreaView } from "react-native";
// // // import styled from "styled-components/native";
// // // import Logo from "./screens/Logo";
// // // import Items from "./screens/Items";
// // // import Saved from "./screens/Saved";


// // // /* Add onto later 
// // // // Screen Imports
// // // import HomeScreen from "./screens/HomeScreen"; */

// // // export default class App extends React.Component {
// // //   render() {
// // //     return (
// // //       <Container>
// // //         <SafeAreaView>
// // //         <ScrollView style={{ height: "100%" }}>
// // //         <TitleBar>
// // //           <Avatar source={require("./assets/avatar-default.jpg")} />
// // //           <Title>Welcome back,</Title>
// // //           <Name>Sikha</Name>
// // //         </TitleBar>
// // //         <ScrollView 
// // //         style={{ 
// // //           flexDirection: "row", 
// // //           padding: 20, 
// // //           paddingLeft: 12,
// // //           paddingTop: 30 
// // //         }} 
// // //         horizontal={true}
// // //         showsHorizontalScrollIndicator={false}
// // //         >
// // //           {logos.map((logo, index) => (
// // //         <Logo 
// // //         key={index}
// // //         image={logo.image}
// // //         text={logo.text} />
// // //           ))}
// // //         </ScrollView>
// // //         <Subtitle>New Activities</Subtitle>
// // //         <ScrollView 
// // //         horizontal={true} 
// // //         style={{ paddingBottom: 30 }} 
// // //         showsHorizontalScrollIndicator={false}
// // //         >
// // //         {items.map((items, index) => (
// // //         <Items 
// // //         title= {items.title}
// // //         image={items.image}
// // //         caption={items.caption}
// // //         logo={items.logo}
// // //         subtitle={items.subtitle}
// // //       />
// // //         ))}
// // //         </ScrollView>
// // //         <Subtitle>Your Saved </Subtitle>
// // //         {saved.map((saved, index) => (
// // //         <Saved 
// // //         key={index}
// // //         image={saved.image}
// // //         title={saved.title}
// // //         subtitle={saved.subtitle}
// // //         logo={saved.logo}
// // //         author={saved.author}
// // //         avatar={saved.avatar}
// // //         caption={saved.caption}
// // //         />
// // //         ))}
// // //         </ScrollView>
// // //         </SafeAreaView>
        
// // //       </Container>
// // //     );
// // //   }
// // // }

// // // const Subtitle = styled.Text`
// // // color: #000000;
// // // font-weight: 600;
// // // font-size: 16px;
// // // margin-left: 20px;
// // // margin-top: 20px;
// // // text-transform: uppercase; //transforms entire subtitle to all uppercase
// // // `;


// // // const Avatar = styled.Image`   
// // // width: 44px;
// // // height: 44px;
// // // background: black;
// // // border-radius: 22px;
// // // margin-left: 20px;
// // // position: absolute;
// // // top: 0;
// // // left: 0;
// // // `;

// // // const Container = styled.View`
// // //   flex: 1;
// // //   background-color: #EDF6F9;
// // //   `;

// // //   const Title = styled.Text`
// // //   font-size: 18px;
// // //   color: black;
// // //   font-weight: 500;
// // //   `;

// // //   const Name = styled.Text`
// // //   font-size: 20px;
// // //   color: #e29578;
// // //   font-weight: bold;
// // //   `;

// // //   const TitleBar = styled.View`
// // //   width: 100%;
// // //   margin-top: 50px;
// // //   padding-left: 80px;
// // //   `;

// // //   const logos = [
// // //     {
// // //       image: require("./assets/family.png"),
// // //       text: "Family"
// // //     },
// // //     {
// // //       image: require("./assets/night.png"),
// // //       text: "Nighttime"
// // //     },
// // //     {
// // //       image: require("./assets/bday.png"),
// // //       text: "Birthdays"
// // //     },
// // //     {
// // //       image: require("./assets/selfcare.png"),
// // //       text: "Self Care"
// // //     },
// // //     {image: require("./assets/date.png"),
// // //     text: "Dates"
// // //     }
// // //   ];

// // //   const items = [
// // //     {
// // //       title: "Massages in the Upper East Side",
// // //       image: require("./assets/massage_xplore.jpg"),
// // //       subtitle: " Treat yourself to a well deserved you day ",
// // //       caption: "Self Care:",
// // //       logo: require("./assets/selfcare.png")
// // //     },
// // //     {
// // //       title: "Museum of Ice Cream",
// // //       image: require("./assets/museum-of-icecream.jpg"),
// // //       subtitle: "The cherry on top for your special day ",
// // //       caption: "Birthdays:",
// // //       logo: require("./assets/bday.png")
// // //     },
// // //     {
// // //       title: "Karaoke in K-Town",
// // //       image: require("./assets/karaoke.jpg"),
// // //       subtitle: "Let your inner rockstar out",
// // //       caption: "Nighttime:",
// // //       logo: require("./assets/night.png")
// // //     },
// // //     {
// // //       title: "Paint and Sip in Chelsea",
// // //       image: require("./assets/paint-and-sip.jpg"),
// // //       subtitle: "Fun date night idea",
// // //       caption: "Dates:",
// // //       logo: require("./assets/date.png")
// // //     },
// // //     {
// // //       title: "Family Fun at Morgan Library",
// // //       image: require("./assets/morgan-library.jpg"),
// // //       subtitle: "Holiday readings at the Morgan Library",
// // //       caption: "Family:",
// // //       logo: require("./assets/family.png")
// // //     }
// // //   ];

// // // const saved = [
// // //   {
// // //     title: "Ice Skating",
// // //     subtitle: "Bryant Park",
// // //     image: require("./assets/ice-skating-bryant.jpg"),
// // //     avatar: require("./assets/avatar-default.jpg"),
// // //     logo: require("./assets/family.png"),
// // //     caption: "Family: "
// // //   },
// // //   {
// // //     title: "Spyscape",
// // //     subtitle: "Midtown",
// // //     image: require("./assets/spyscape.jpg"),
// // //     avatar: require("./assets/avatar-default.jpg"),
// // //     logo: require("./assets/bday.png"),
// // //     caption: "You might be the next 007"
// // //   },

// // //   {
// // //     title: "Spyscape",
// // //     subtitle: "Midtown",
// // //     image: require("./assets/spyscape.jpg"),
// // //     logo: require("./assets/bday.png"),
// // //     caption: "You might be the next 007"
// // //   },

// // // ];











// // import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import { ScrollView, SafeAreaView } from "react-native";
// // import styled from "styled-components/native";
// // import Logo from "./screens/Logo";
// // import Items from "./screens/Items";

// // /* Add onto later 
// // // Screen Imports
// // import HomeScreen from "./screens/HomeScreen"; */

// // export default class App extends React.Component {
// //   render() {
// //     return (
// //       <Container>
// //         <SafeAreaView>
// //         <ScrollView style={{ height: "100%" }}>
// //         <TitleBar>
// //           <Avatar source={require("./assets/avatar-default.jpg")} />
// //           <Title>Welcome back,</Title>
// //           <Name>Sikha</Name>
// //         </TitleBar>
// //         <ScrollView 
// //         style={{ 
// //           flexDirection: "row", 
// //           padding: 20, 
// //           paddingLeft: 12,
// //           paddingTop: 30 
// //         }} 
// //         horizontal={true}
// //         showsHorizontalScrollIndicator={false}
// //         >
// //           {logos.map((logo, index) => (
// //         <Logo 
// //         key={index}
// //         image={logo.image}
// //         text={logo.text} />
// //           ))}
// //         </ScrollView>
// //         <Subtitle>New Activities</Subtitle>
// //         <ScrollView 
// //         horizontal={true} 
// //         style={{ paddingBottom: 30 }} 
// //         showsHorizontalScrollIndicator={false}
// //         >
// //         {items.map((items, index) => (
// //         <Items 
// //         title= {items.title}
// //         image={items.image}
// //         caption={items.caption}
// //         logo={items.logo}
// //         subtitle={items.subtitle}
// //       />
// //         ))}
// //         </ScrollView>
// //         </ScrollView>
// //         </SafeAreaView>
// //       </Container>
// //     );
// //   }
// // }

// // const Subtitle = styled.Text`
// // color: #000000;
// // font-weight: 600;
// // font-size: 16px;
// // margin-left: 20px;
// // margin-top: 20px;
// // text-transform: uppercase; //transforms entire subtitle to all uppercase
// // `;


// // const Avatar = styled.Image`   
// // width: 44px;
// // height: 44px;
// // background: black;
// // border-radius: 22px;
// // margin-left: 20px;
// // position: absolute;
// // top: 0;
// // left: 0;
// // `;

// // const Container = styled.View`
// //   flex: 1;
// //   background-color: #EDF6F9;
// //   `;

// //   const Title = styled.Text`
// //   font-size: 18px;
// //   color: black;
// //   font-weight: 500;
// //   `;

// //   const Name = styled.Text`
// //   font-size: 20px;
// //   color: #e29578;
// //   font-weight: bold;
// //   `;

// //   const TitleBar = styled.View`
// //   width: 100%;
// //   margin-top: 50px;
// //   padding-left: 80px;
// //   `;

// //   const logos = [
// //     {
// //       image: require("./assets/family.png"),
// //       text: "Family"
// //     },
// //     {
// //       image: require("./assets/night.png"),
// //       text: "Nighttime"
// //     },
// //     {
// //       image: require("./assets/bday.png"),
// //       text: "Birthdays"
// //     },
// //     {
// //       image: require("./assets/selfcare.png"),
// //       text: "Self Care"
// //     },
// //     {image: require("./assets/date.png"),
// //     text: "Dates"
// //     }
// //   ];

// //   const items = [
// //     {
// //       title: "Yoga at Bryant Park",
// //       image: require("./assets/yoga.jpg"),
// //       subtitle: "Be at ease with Instructor Rachel",
// //       caption: "Self Care:",
// //       logo: require("./assets/selfcare.png")
// //     },
// //     {
// //       title: "Museum of Ice Cream",
// //       image: require("./assets/museum-of-icecream.jpg"),
// //       subtitle: "The cherry on top for your special day ",
// //       caption: "Birthdays:",
// //       logo: require("./assets/bday.png")
// //     },
// //     {
// //       title: "Karaoke in K-Town",
// //       image: require("./assets/karaoke.jpg"),
// //       subtitle: "Let your inner rockstar out",
// //       caption: "Nighttime:",
// //       logo: require("./assets/night.png")
// //     },
// //     {
// //       title: "Paint and Sip in Chelsea",
// //       image: require("./assets/paint-and-sip.jpg"),
// //       subtitle: "Fun date night idea",
// //       caption: "Dates",
// //       logo: require("./assets/date.png")
// //     },
// //     {
// //       title: "Family Fun at Morgan Library",
// //       image: require("./assets/morgan-library.jpg"),
// //       subtitle: "Holiday readings at the Morgan Library",
// //       caption: "Family",
// //       logo: require("./assets/family.png")
// //     }
// //   ];
















// // // // import { StatusBar } from "expo-status-bar";
// // // // import React from "react";
// // // // import { ScrollView, SafeAreaView } from "react-native";
// // // // import styled from "styled-components/native";
// // // // import Items from "./screens/Items";

// // // // /* Add onto later 
// // // // // Screen Imports
// // // // import HomeScreen from "./screens/HomeScreen"; */

// // // // export default class App extends React.Component {
// // // //   render() {
// // // //     return (
// // // //       <Container>
// // // //         <SafeAreaView>
// // // //         <ScrollView>
// // // //         <TitleBar>
// // // //           <Avatar source={require("./assets/avatar-default.jpg")} />
// // // //           <Title>Welcome back,</Title>
// // // //           <Name>Sikha</Name>
// // // //         </TitleBar>
// // // //         <Subtitle>New Activities</Subtitle>
// // // //         <ScrollView 
// // // //         horizontal={true} 
// // // //         style={{ paddingBottom: 30 }} 
// // // //         showsHorizontalScrollIndicator={false}
// // // //         >
// // // //         <Items 
// // // //           title= "Massages in the Upper East Side"
// // // //           image={require("./assets/massage_xplore.jpg")}
// // // //           caption="React"
// // // //           logo={require("./assets/profile_icon.png")}
// // // //           subtitle="Treat yourself to a self care day"
// // // //         />
// // // //         <Items
// // // //           title="Bowling in Midtown"
// // // //           image={require("./assets/bowling.jpg")}
// // // //           caption="Fun bowling places"
// // // //           logo={require("./assets/profile_icon.png")}
// // // //           subtitle="Great bowling alleys to go with people of all ages"
// // // //         />
// // // //         </ScrollView>
// // // //         </ScrollView>
// // // //         </SafeAreaView>
// // // //       </Container>
// // // //     );
// // // //   }
// // // // }

// // // // const Subtitle = styled.Text`
// // // // color: #000000;
// // // // font-weight: 600;
// // // // font-size: 15px;
// // // // margin-left: 20px;
// // // // margin-top: 50px;
// // // // text-transform: uppercase; //transforms entire subtitle to all uppercase
// // // // `;


// // // // const Avatar = styled.Image`
// // // // width: 44px;
// // // // height: 44px;
// // // // background: black;
// // // // border-radius: 22px;
// // // // margin-left: 20px;
// // // // position: absolute;
// // // // top: 0;
// // // // left: 0;
// // // // `;

// // // // const Container = styled.View`
// // // //   flex: 1;
// // // //   background-color: #EDF6F9;
// // // //   `;

// // // //   const Title = styled.Text`
// // // //   font-size: 18px;
// // // //   color: #000000;
// // // //   font-weight: 500;
// // // //   `;

// // // //   const Name = styled.Text`
// // // //   font-size: 20px;
// // // //   color: #e29578;
// // // //   font-weight: bold;
// // // //   `;

// // // //   const TitleBar = styled.View`
// // // //   width: 100%;
// // // //   margin-top: 50px;
// // // //   padding-left: 80px;
// // // //   `;

