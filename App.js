import React, { Component } from 'react';
import {StyleSheet,View,StatusBar} from 'react-native';
import Header from './src/components/Header';
import Cover from'./src/components/Cover';
import Seekbar from './src/components/Seekbar';
import Player from './src/components/Player';
import Footer from './src/components/Footer';
export default class App extends Component{
render(){
    return(
<View style={styles.container}>
      <StatusBar
        backgroundColor="#131313"
        barStyle="light-content"
      />
      <Header/>
      <Cover/>
      <Seekbar/>
      <Player/>
      <Footer/>
  </View>
    );
}
}
const styles = StyleSheet.create({
container: {

  backgroundColor: '#000000',
  flex:12,
},


});