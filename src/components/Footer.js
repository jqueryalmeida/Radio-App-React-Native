import React, { Component } from 'react';
import { StyleSheet,Text,View} from 'react-native';
import Image from 'react-native-remote-svg';
export default class Footer extends Component{
  render() {
    return (
    <View style={styles.header}>
    {/* <View style={styles.footer}>
      <Image style={styles.iconRadio} source={{uri: 'https://leblon.000webhostapp.com/rn/iosradio.svg'}}></Image>
      <Text style={ styles.textoFooter}>Ouça a Inconfidencia AM</Text>
    </View> */}
    </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex:1,
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  textoFooter:{
    fontSize:12,
    color: "#999"
  },
  iconRadio:{
    width:20,
    height:20,
    marginRight:5,
  },
});
