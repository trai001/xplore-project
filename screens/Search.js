import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Search = () => {
   return(
      // Logo And Search Bar
      <Header>
         <Logo>XPLORE</Logo>
         <SearchContainer>
            <Entypo name="menu" size={30} color="black" />
            <SearchBox placeholder="Search for your next activity..." />
         </SearchContainer>
      </Header>
   )
}

export default Search;

// Stylesheet
const Header = styled.View`
   display: flex;
   justify-content: center;
   /* Padding: top, sides */
   padding: 100px 20px;
`
const Logo = styled.Text`
   font-weight: bold;
   font-size: 20px;
   text-align: center;
`

const SearchContainer = styled.View`
   display: flex;
   width: 100%;
   margin: 20px 0px;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   
`
const SearchBox = styled.TextInput`
   background-color: white;
   border:2px solid black;
   width: 80%;
   padding: 10px 12px;
   border-radius: 10px;
`

