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
// import Logo from "../screens/Logo";
// import Items from "../screens/Items";
// import Saved from "../screens/Saved";



// /* Add onto later 
// // Screen Imports
// import HomeScreen from "./screens/HomeScreen"; */

// export default class App extends 
// React.Component {
//   render() {
//     return (
//       <Container>
//          <ImageBackground
//             source={require('../assets/background_splash.png')}
//        style={styles.background} 
//       />
//         <SafeAreaView>
//         <ScrollView style={{ height: "100%" }}>
//         <TitleBar>
//           <Avatar source={require("../assets/avatar-default.jpg")} />
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
//         text={logo.text} 
//         />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center"
//   },

//   background:{
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     resizeMode: 'stretch',
          
//   },
// });



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

  
  
  
            

//   const logos = [
//     {
//       image: require("../assets/family.png"),
//       text: "Family"
//     },
//     {
//       image: require("../assets/night.png"),
//       text: "Nighttime"
//     },
//     {
//       image: require("../assets/bday.png"),
//       text: "Birthdays"
//     },
//     {
//       image: require("../assets/selfcare.png"),
//       text: "Self Care"
//     },
//     {image: require("../assets/date.png"),
//     text: "Dates"
//     }
//   ];


//   const items = [
//     {
//       title: "Massages in the Upper East Side",
//       image: require("../assets/massage_xplore.jpg"),
//       subtitle: " Treat yourself to a well deserved you day ",
//       caption: "Self Care:",
//       logo: require("../assets/selfcare.png")
//     },
//     {
//       title: "Museum of Ice Cream",
//       image: require("../assets/museum-of-icecream.jpg"),
//       subtitle: "The cherry on top for your special day ",
//       caption: "Birthdays:",
//       logo: require("../assets/bday.png")
//     },
//     {
//       title: "Karaoke in K-Town",
//       image: require("../assets/karaoke.jpg"),
//       subtitle: "Let your inner rockstar out",
//       caption: "Nighttime:",
//       logo: require("../assets/night.png")
//     },
//     {
//       title: "Paint and Sip in Chelsea",
//       image: require("../assets/paint-and-sip.jpg"),
//       subtitle: "Fun date night idea",
//       caption: "Dates:",
//       logo: require("../assets/date.png")
//     },
//     {
//       title: "Family Fun at Morgan Library",
//       image: require("../assets/morgan-library.jpg"),
//       subtitle: "Holiday readings at the Morgan Library",
//       caption: "Family:",
//       logo: require("../assets/family.png")
//     }
//   ];

//   const saved = [
//     {
      
//     }
//   ]

  


























//import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Logo from "../screens/Logo"; 
import Items from "../screens/Items";
import {
  StyleSheet,
  Animated,
  Opacity,
  //StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,                                   
  Button,
  TouchableOpacity,
} from "react-native";
import Popular from "../components/Popular";
import Saved from "../components/Saved";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";


function mapStateToProps(state) {
  return{action: state.action,name:state.name };
};

function mapDispatchToProps(dispatch) {
  return {
    openMenu:() => 
         dispatch({
          type: "OPEN_MENU"
        
    })
  };
}



class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state={
    scale:new Animated.Value(1)
    //Opacity: new Animated.Value(1)
  };

  componentDidUpdate(){
    this.toggleMenu()
  }

  toggleMenu =() =>{
    if (this.props.action=="openMenu"){
      Animated.spring(this.state.scale,{
        toValue: 0.9
      }).start();
      // Animated.spring(this.state.Opacity,{
      //   toValue: 0.5
      // }).start();

     // StatusBar.setBarStyle("light-content",true);
    }
    if(this.props.action== "closeMenu"){
      Animated.spring(this.state.scale,{
        toValue:1
      }).start();
      // Animated.spring(this.state.Opacity,{
      //   toValue:1
      // }).start();

     // StatusBar.setBarStyle("dark-content",true);
    }
  };


  render() {
    return (
      <RootView>
         <Menu />
      <AnimatedContainer style={{transform:[{scale:this.state.scale}],Opacity: this.state.Opacity}}>
       <ImageBackground
            source={require('../assets/background_splash.png')}
       style={styles.background} 
      />
        <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
        <TitleBar>
          <TouchableOpacity 
          onPress={this.props.openMenu} 
          style={{position:"absolute", top:0, left:20}}>
            <Avatar />
          </TouchableOpacity>
          <Title>Welcome back,</Title>
          <Name>{this.props.name}</Name>
        </TitleBar>
        <ScrollView 
        style={{ 
          flexDirection: "row", 
          padding: 20, 
          paddingLeft: 12,
          paddingTop: 30 
        }} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
          {logos.map((logo, index) => (
        <Logo 
        key={index}
        image={logo.image}
        text={logo.text} />
          ))}
        </ScrollView>
        <Subtitle>New Activities</Subtitle>
        <ScrollView 
        horizontal={true} 
        style={{ paddingBottom: 30 }} 
        showsHorizontalScrollIndicator={false}
        >
        {items.map((items, index) => (
          <TouchableOpacity key= {index}
          onPress={() =>{
            this.props.navigation.push("Section");
          }}
          >

        <Items 
        title= {items.title}
        image={items.image}
        caption={items.caption}
        logo={items.logo}
        subtitle={items.subtitle}
      />
      </TouchableOpacity>
        ))}
       
        </ScrollView>
        <Subtitle>Popular Events</Subtitle>
        <ScrollView 
        horizontal={true} 
        style={{ paddingBottom: 30 }} 
        showsHorizontalScrollIndicator={false}
        >
        {popular.map((popular,index)=>(
          <Popular 
          title={popular.title}
          image={popular.image}
          subtitle={popular.subtitle}
          caption= {popular.caption}
          logo={popular.logo}
        
          />
        ))}

</ScrollView>
        <Subtitle>Saved Events</Subtitle>
        <ScrollView 
        horizontal={true} 
        style={{ paddingBottom: 30 }} 
        showsHorizontalScrollIndicator={false}
        >
        {saved.map((saved,index)=>(
          <Saved
          title={saved.title}
          image={saved.image}
          subtitle={saved.subtitle}
          caption= {saved.caption}
          logo={saved.logo}
        
          />
        ))}
         </ScrollView>
        </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
      </RootView>
    );
  }
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
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps)
  (HomeScreen);


const RootView = styled.View`
  background:black;
  flex:1;
`;


const Subtitle = styled.Text`
color: #000000;
font-weight: 600;
font-size: 16px;
margin-left: 20px;
margin-top: 20px;
text-transform: uppercase; //transforms entire subtitle to all uppercase
`;


// const Avatar = styled.Image`   
// width: 44px;
// height: 44px;
// background: black;
// border-radius: 22px;
// `;

const Container = styled.View`
  flex: 1;
  background-color: #EDF6F9;
  border-top-left-radius:12px;
  border-top-right-radius: 12px;
  `;

  const AnimatedContainer = Animated.createAnimatedComponent(Container);

  const Title = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: 500;
  `;

  const Name = styled.Text`
  font-size: 20px;
  color: #e29578;
  font-weight: bold;
  `;

  const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
  `;

  const logos = [
    {
      image: require("../assets/family.png"),
      text: "Family"
    },
    {
      image: require("../assets/night.png"),
      text: "Nighttime"
    },
    {
      image: require("../assets/bday.png"),
      text: "Birthdays"
    },
    {
      image: require("../assets/selfcare.png"),
      text: "Self Care"
    },
    {image: require("../assets/date.png"),
    text: "Dates"
    }
  ];

  const items = [
    {
      title: "Yoga at Bryant Park",
      image: require("../assets/yoga.jpg"),
      subtitle: "Be at ease with Instructor Rachel",
      caption: "Self Care: ",
      logo: require("../assets/selfcare.png")
    },
    {
      title: "Museum of Ice Cream",
      image: require("../assets/museum-of-icecream.jpg"),
      subtitle: "The cherry on top for your special day ",
      caption: "Birthdays: ",
      logo: require("../assets/bday.png")
    },
    {
      title: "Karaoke in K-Town",
      image: require("../assets/karaoke.jpg"),
      subtitle: "Let your inner rockstar out",
      caption: "Nighttime: ",
      logo: require("../assets/night.png")
    },
    {
      title: "Paint and Sip in Chelsea",
      image: require("../assets/paint-and-sip.jpg"),
      subtitle: "Fun date night idea",
      caption: "Dates: ",
      logo: require("../assets/date.png")
    },
    {
      title: "Family Fun at Morgan Library",
      image: require("../assets/morgan-library.jpg"),
      subtitle: "Holiday readings at the Morgan Library",
      caption: "Family: ",
      logo: require("../assets/family.png")
    }
  ];

const popular=[
  {
    title:"Row Boat in Central Park",
    image: require("../assets/rowboat-central.jpg"),
    subtitle: "Row Row Row the Boat",
    caption: "Dates: ",
    logo: require("../assets/date.png")
  },
  {
  title: "Escape Room in Midtown",
  image: require("../assets/escape-room.jpg"),
  subtitle: "Can you escape in time?",
  caption: "Birthdays: ",
  logo: require("../assets/bday.png")
},
{
  title: "Family Fun at Childrens Museum of the Arts",
  image: require("../assets/childrens-museum-of-the-arts.jpg"),
  subtitle: "Come to learn,play and grow!",
  caption: "Family: ",
  logo: require("../assets/family.png")
}
];

const saved=[
  {
    title:"SPYSCAPE in Midtown",
    image: require("../assets/spyscape.jpg"),
    subtitle: "Be the next James Bond",
    caption: "Nighttime: ",
    logo: require("../assets/night.png")
  },
  {
  title: "THE MET",
  image: require("../assets/the-met.jpg"),
  subtitle: "Explore new pieces",
  caption: "Dates: ",
  logo: require("../assets/date.png")
},
{
  title: "NYC's Finest Comedy Club",
  image: require("../assets/comedy-club.jpg"),
  subtitle: "Come have a laugh",
  caption: "Nighttime: ",
  logo: require("../assets/night.png")
},
];










  

// // import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import { ScrollView, SafeAreaView } from "react-native";
// // import styled from "styled-components/native";
// // import Logo from "../screens/Logo";
// // import Items from "../screens/Items";
// // import Saved from "../screens/Saved";


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
// //           <Avatar source={require("../assets/avatar-default.jpg")} />
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
// //         <Subtitle>Your Saved </Subtitle>
// //         {saved.map((saved, index) => (
// //         <Saved 
// //         key={index}
// //         image={saved.image}
// //         title={saved.title}
// //         subtitle={saved.subtitle}
// //         logo={saved.logo}
// //         author={saved.author}
// //         avatar={saved.avatar}
// //         caption={saved.caption}
// //         />
// //         ))}
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
// //       image: require("../assets/family.png"),
// //       text: "Family"
// //     },
// //     {
// //       image: require("../assets/night.png"),
// //       text: "Nighttime"
// //     },
// //     {
// //       image: require("../assets/bday.png"),
// //       text: "Birthdays"
// //     },
// //     {
// //       image: require("../assets/selfcare.png"),
// //       text: "Self Care"
// //     },
// //     {image: require("../assets/date.png"),
// //     text: "Dates"
// //     }
// //   ];

// //   const items = [
// //     {
// //       title: "Massages in the Upper East Side",
// //       image: require("../assets/massage_xplore.jpg"),
// //       subtitle: " Treat yourself to a well deserved you day ",
// //       caption: "Self Care:",
// //       logo: require("../assets/selfcare.png")
// //     },
// //     {
// //       title: "Museum of Ice Cream",
// //       image: require("../assets/museum-of-icecream.jpg"),
// //       subtitle: "The cherry on top for your special day ",
// //       caption: "Birthdays:",
// //       logo: require("../assets/bday.png")
// //     },
// //     {
// //       title: "Karaoke in K-Town",
// //       image: require("../assets/karaoke.jpg"),
// //       subtitle: "Let your inner rockstar out",
// //       caption: "Nighttime:",
// //       logo: require("../assets/night.png")
// //     },
// //     {
// //       title: "Paint and Sip in Chelsea",
// //       image: require("../assets/paint-and-sip.jpg"),
// //       subtitle: "Fun date night idea",
// //       caption: "Dates:",
// //       logo: require("../assets/date.png")
// //     },
// //     {
// //       title: "Family Fun at Morgan Library",
// //       image: require("../assets/morgan-library.jpg"),
// //       subtitle: "Holiday readings at the Morgan Library",
// //       caption: "Family:",
// //       logo: require("../assets/family.png")
// //     }
// //   ];

// // const saved = [
// //   {
// //     title: "Ice Skating",
// //     subtitle: "Bryant Park",
// //     image: require("../assets/ice-skating-bryant.jpg"),
// //     avatar: require("../assets/avatar-default.jpg"),
// //     logo: require("../assets/family.png"),
// //     caption: "Family: "
// //   },
// //   {
// //     title: "Spyscape",
// //     subtitle: "Midtown",
// //     image: require("../assets/spyscape.jpg"),
// //     avatar: require("../assets/avatar-default.jpg"),
// //     logo: require("../assets/bday.png"),
// //     caption: "You might be the next 007"
// //   },

// // ];

// // const popular = [
// //   {
// //     title: "Ice Skating in Bryant Park",
// //     image: require("../assets/ice-skating-bryant.jpg"),
// //     logo: require("../assets/family.png"),
// //     caption: "Family: "
// //   },
// //   {
// //     title: "Spyscape",
// //     subtitle: "Midtown",
// //     image: require("../assets/spyscape.jpg"),
// //     logo: require("../assets/bday.png"),
// //     caption: "You might be the next 007"
// //   },

// // ];


























// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { ScrollView, SafeAreaView } from "react-native";
// import styled from "styled-components/native";
// import Items from "../screens/Items";

// /* Add onto later 
// // Screen Imports
// import HomeScreen from "./screens/HomeScreen"; */

// export default class App extends React.Component {
//   render() {
//     return (
//       <Container>
//         <SafeAreaView>
//         <ScrollView>
//         <TitleBar>
//           <Avatar source={require("../assets/avatar-default.jpg")} />
//           <Title>Welcome back,</Title>
//           <Name>Sikha</Name>
//         </TitleBar>
//         <Subtitle>New Activities</Subtitle>
//         <ScrollView 
//         horizontal={true} 
//         style={{ paddingBottom: 30 }} 
//         showsHorizontalScrollIndicator={false}
//         >
//         <Items 
//           title= "Massages in the Upper East Side"
//           image={require("../assets/massage_xplore.jpg")}
//           caption="React"
//           logo={require("../assets/profile_icon.png")}
//           subtitle="Treat yourself to a self care day"
//         />
//         <Items
//           title="Bowling in Midtown"
//           image={require("../assets/bowling.jpg")}
//           caption="Fun bowling places"
//           logo={require("../assets/profile_icon.png")}
//           subtitle="Great bowling alleys to go with people of all ages"
//         />
//         </ScrollView>
//         </ScrollView>
//         </SafeAreaView>
//       </Container>
//     );
//   }
// }

// const Subtitle = styled.Text`
// color: #000000;
// font-weight: 600;
// font-size: 15px;
// margin-left: 20px;
// margin-top: 50px;
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

// const Container = styled.View`
//   flex: 1;
//   background-color: #EDF6F9;
//   `;

//   const Title = styled.Text`
//   font-size: 18px;
//   color: #000000;
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







// // import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// // import {SafeAreaView, TextInput, View} from 'react-native';
// // import styled from 'styled-components/native';
// // import { Entypo } from '@expo/vector-icons';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const HomeScreen = () => {
// //    return(
// //       // Logo And Search Bar
// //       <Header>
// //          <Logo>XPLORE</Logo>
// //          <SearchContainer>
// //             <Entypo name="menu" size={30} color="black" />
// //             <SearchBox placeholder="Search for your next activity..." />
// //          </SearchContainer>
// //       </Header>
// //    )
// // }

// // export default HomeScreen;

// // // Stylesheet
// // const Header = styled.View`
// //    display: flex;
// //    justify-content: center;
// //    /* Padding: top, sides */
// //    padding: 100px 20px;
// // `
// // const Logo = styled.Text`
// //    font-weight: bold;
// //    font-size: 20px;
// //    text-align: center;
// // `

// // const SearchContainer = styled.View`
// //    display: flex;
// //    width: 100%;
// //    margin: 20px 0px;
// //    flex-direction: row;
// //    justify-content: space-around;
// //    align-items: center;
   
// // `
// // const SearchBox = styled.TextInput`
// //    background-color: white;
// //    border:2px solid black;
// //    width: 80%;
// //    padding: 10px 12px;
// //    border-radius: 10px;
// // `
