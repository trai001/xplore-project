import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons } from '@expo/vector-icons';
import PopularScreen from "../screens/PopularScreen";
import SavedScreen from "../screens/SavedScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack= createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
}, {
  mode: "modal"
}
);

HomeStack.navigationOptions= ({navigation}) => {
  var tabBarVisible =true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if(routeName == "Section"){
    tabBarVisible = false;
  }

  return{
    tabBarVisible,
    tabBarLabel : "Home",
    tabBarIcon: ({focused}) =>(
      <Ionicons name ="home" size={26} color={
        focused ? activeColor : inactiveColor} 
        />
    )
  };
};
      
const PopularStack = createStackNavigator({
  Popular: PopularScreen
});

PopularStack.navigationOptions={
  tabBarLabel : "Popular",
  tabBarIcon: ({focused}) =>(
    <Ionicons name ="albums" size={26} color={
      focused ? activeColor : inactiveColor} 
      />
  )
};

const SavedStack = createStackNavigator({
  Saved:SavedScreen
});

SavedStack.navigationOptions={
  tabBarLabel : "Saved",
  tabBarIcon: ({focused}) =>(
    <Ionicons name ="folder" size={26} color={
      focused ? activeColor : inactiveColor} 
      />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  PopularStack,
  SavedStack
});

export default TabNavigator;
