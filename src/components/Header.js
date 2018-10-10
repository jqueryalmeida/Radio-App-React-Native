import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import Image from 'react-native-remote-svg';


export default class App extends Component{

  render() {
    return (
    <View style={styles.header}>
    <TouchableHighlight onPress={()=> this.props.navigation.openDrawer()}>
        <View style={styles.teste}>
            <Image style={styles.icon1} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-menu.svg'}}></Image>
        </View>
    </TouchableHighlight> 
            <Text style={styles.title}>Radio Inconfidencia</Text>
            <Image style={styles.icon2} source={{uri: 'https://leblon.000webhostapp.com/rn/mdmore.svg'}}></Image>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
      height:50,
      alignItems:'stretch',
      alignItems:'center',
      justifyContent: 'center',
      justifyContent: 'space-between',
      flexDirection:'row'
  },
  title:{
    color:"#1d1d1d",
    fontSize:16,
  },
  icon1:{
      width:24,
      height:24,
  },
  icon2:{
    width:24,
    height:24,
    marginRight:8,
},
teste:{
    marginLeft:15,
}
});
