import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";
import Login from "../screens/Login";

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: HomeScreen,
  Section: SectionScreen,
}
,{
  mode:"modal"
}
);


export default createAppContainer(TabNavigator);
