import React, { Component } from 'react';
import {StyleSheet,Text,View,StatusBar,ToastAndroid,TouchableHighlight,Slider,FlatList} from 'react-native';
import Sound from 'react-native-sound';
import Image from 'react-native-remote-svg';
import{createDrawerNavigator} from 'react-navigation';
import App from '../../App';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
export default class Drawer extends Component{
  render() {
    return (
    <View>
      <AppDrawerNavigator/>
      <Text>Testanda pagina
      </Text>
    </View>
    );
  }
}
const AppDrawerNavigator = createDrawerNavigator({
Inicio : App,
Home: HomeScreen,
Settings: SettingsScreen,

})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

});
