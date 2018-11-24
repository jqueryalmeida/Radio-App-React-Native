import React, { Component } from 'react';
import {StyleSheet,Text,View,ToastAndroid,TouchableHighlight} from 'react-native';
import Sound from 'react-native-sound';
import Image from 'react-native-remote-svg';
import * as Progress from 'react-native-progress';
export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
          isPlaying: true,
          SliderValue :  0.3,
          load: true,
          Play : require('../img/play.png'),
          Pause : require('../img/pause.png'),
          Stop : require('../img/stop1.png'),
        }
        this.STREAMING();
      }
     STREAMING = ()=>{
        sound = new Sound('http://192.99.227.251:7041/stream', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            ToastAndroid.show('ERRO NO STREAMING - ?' + error,ToastAndroid.LONG);
            return;
          }
          if(this.state.isPlaying){
             this.setState({load: false});
           }
        });
      }
    test = () =>{
        if(this.state.isPlaying){
          this._onPressPlay();
        }else{
          this._onPressPause();
        }
      }
      _onPressPlay=()=>{
        sound.play();
        this.setState({Play: require('../img/pause.png')});
        this.setState({isPlaying:false});
      }
      _onPressPause=()=>{
        sound.pause();
        this.setState({Play:require('../img/play.png')});
        this.setState({isPlaying:true});
      }
      _onPressStop=()=>{
        sound.stop();
        sound.reset();
        this.setState({load: true});
        this.setState({Play:require('../img/play.png')});
        this.setState({isPlaying:true});
        this.STREAMING();
      }
  render() {
    return (
    <View style={styles.playerWrapper}>
    <View style = {styles.areaBotoes}>
        <View style={styles.imgButton}>
          <TouchableHighlight underlayColor="#000000">
            <View style={styles.skip1}>
              <Image style={styles.rewind} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-more.svg'}}></Image>
            </View>
           </TouchableHighlight>

           <TouchableHighlight underlayColor="#000000">
            <View style={styles.skip1}>
              <Image style={styles.rewind} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-rewind.svg'}}></Image>
            </View>
           </TouchableHighlight>

            <TouchableHighlight onPress={() => this.test()} underlayColor="#000000">
                <Image style={styles.buttonPlayPause} source={this.state.Play}/>
            </TouchableHighlight>

           <TouchableHighlight underlayColor="#000000">
            <View style={styles.skip2}>
              <Image style={styles.rewind} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-fastforward.svg'}}></Image>
            </View>
           </TouchableHighlight>

           <TouchableHighlight onPress={() => this._onPressStop()} underlayColor="white">
           <View style={styles.skip2}>
            <Image style={styles.rewind} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-square.svg'}}></Image>
           </View>
           </TouchableHighlight>
          </View>

          <View style={styles.load}>
            {this.state.load === true ? <Progress.Circle size={66} borderWidth={2} color={"#ffffff"} indeterminate={true} />: null}
          </View>
   </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    playerWrapper:{
        flex:3,
        alignItems:'center',
    },
    areaBotoes:{
        flexDirection:'row',
        alignItems:'flex-start',
      },
      seekBar:{
        height:50,
      },
      button:{
        marginTop:20,
        width: 65,
        height: 65,
        borderRadius:40
      },
      imgButton:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:17,
        flexDirection:'row'
      },
      buttonPlayPause:{
        width: 70,
        height: 70,
      },
      header: {
        height:50,
        alignItems:'stretch',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        flexDirection:'row'
      },
      title:{
        color:"#ffffff",
        fontSize:14,
        fontWeight:'bold'
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
      },
      skip1:{
      width:40,
      height:40,
      backgroundColor: '#444',
      borderRadius:40,
      marginRight:10,
      justifyContent: 'center',
      alignItems: 'center',
      },
      skip2:{
      width:40,
      height:40,
      backgroundColor: '#444',
      borderRadius:40,
      marginLeft:10,
      justifyContent: 'center',
      alignItems: 'center',
      },
      buttonStop:{
      width:40,
      height:40,
      marginLeft:10,
      backgroundColor: '#444',
      borderRadius:40,
      },
      load:{
      position:'absolute',
      top:19,
      left:102,
      },
      rewind:{
      width:20,
      height:20,
      }
});
