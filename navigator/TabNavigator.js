import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";


const HomeStack= createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen,
});

HomeStack.navigationOptions={
  tabBarLabel : "Home"
};
      
const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});

const ProjectsStack = createStackNavigator({
  Projects:SectionScreen
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
