import React, { Component } from 'react';
import {StyleSheet,Text,View,NetInfo} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

import HomeScreen from'./src/components/HomeScreen';
import SettingsScreen from'./src/components/SettingsScreen';


export default class App extends Component{
    render() {
      return (
          <AppDrawerNavigator/>
      );
    }
  }
  
const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
})

  