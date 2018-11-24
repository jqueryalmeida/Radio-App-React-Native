import React, { Component } from 'react';
import {StyleSheet,View,Slider} from 'react-native';
import Image from 'react-native-remote-svg';
import SystemSetting from 'react-native-system-setting'
export default class Seekbar extends Component{
    constructor(props){
        super(props);
        this.state = {
          SliderValue :  0.3,
        }
      }
  render() {
    return (
    <View style={styles.seekBar}>
      <View style={{flexDirection:"row", justifyContent: 'space-between',width:'86%',marginLeft:'8%'}}>
        <Image style={styles.iconRadio} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-volume-low.svg'}}></Image>
        <Image style={styles.iconRadio} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-volume-high.svg'}}></Image>
      </View>
          <Slider style = {{ width: '90%',marginLeft:'5%' }}
            step = { 0.1 }
            value = {0.3}
            minimumValue = { 0.0 }
            maximumValue = { 1.0 }
            minimumTrackTintColor = "#fd082b"
            maximumTrackTintColor = "#777777"
            thumbTintColor = "#e8e8e8"
            onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
            />
            {SystemSetting.setVolume(this.state.SliderValue)}
    </View>
    );
  }
}
const styles = StyleSheet.create({
      seekBar:{
        flex:1,
        justifyContent:'center',
      },
      iconRadio:{
        width:20,
        height:20,
        marginRight:5,
      },
});
