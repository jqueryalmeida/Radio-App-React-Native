import React, { Component } from 'react';
import {StyleSheet,Text,View,StatusBar,ToastAndroid,TouchableHighlight,Slider,Modal,NetInfo} from 'react-native';
import Sound from 'react-native-sound';
import Image from 'react-native-remote-svg';
import * as Progress from 'react-native-progress';
import SystemSetting from 'react-native-system-setting'

class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
          isPlaying: true,
          SliderValue :  0.0,
          load: true,
          Play : require('../img/play.png'),
          Pause : require('../img/pause.png'),
          Stop : require('../img/stop1.png'),
          img : require('../img/capa.jpg'),
          RadioTeste : 'http://136.243.21.140:8015/stream',
          connected : false,
        }
        NetInfo.isConnected.addEventListener('connectionChange',( res ) =>{
          if(res == false){
            this.setState({connected : true})
          }else{
            this.setState({connected : false})
          }
          })
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
    render(){
        return(
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableHighlight onPress={()=> this.props.navigation.openDrawer()} underlayColor="#000000">
              <View style={styles.teste}>
                <Image style={styles.icon1} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-menu.svg'}}></Image>
              </View>
            </TouchableHighlight> 
              <Text style={styles.title}>Radio Inconfidencia</Text>
              <Image style={styles.icon2} source={{uri: 'https://leblon.000webhostapp.com/rn/mdmore.svg'}}></Image>
         </View>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.connected}
              onRequestClose={() => {
              Alert.alert('Modal has been closed.');
          }}>
           <View style={styles.connection}></View>
        </Modal>
          <StatusBar
            backgroundColor="#131313"
            barStyle="light-content"
          />   
        <View style={styles.topo}>
        <View style={styles.mais}>
          <Image style={styles.iconMais} source={{uri: 'https://leblon.000webhostapp.com/rn/ios-add.svg'}}></Image>
        </View>
            <Image style ={styles.imgPrograma} source={this.state.img}/>
        <View style ={styles.ajusteInfoRadio}>
           <Text style ={styles.programa}>Programa</Text>
           <Text style = {styles.apresentador}>Apresentador</Text>
           <Text style = {styles.horario}>Hora</Text>
        </View>
        </View>
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
        <View style={styles.footer}>
          <Image style={styles.iconRadio} source={{uri: 'https://leblon.000webhostapp.com/rn/iosradio.svg'}}></Image>
          <Text style={ styles.textoFooter}>Ouça a Inconfidencia AM</Text>
        </View>
      </View>
        );
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    topo:{
      flex:8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    areaBotoes:{
      flex:3,
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent: 'center',
    },
    seekBar:{
      flex:1,
    },
    footer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection:'row',
      paddingBottom:10,
    },
    iconRadio:{
      width:20,
      height:20,
      marginRight:5,
    
    },
    ajusteInfoRadio:{
      marginTop:10,
      alignItems: 'center',
    },
    imgPrograma:{
      width:220,
      height:220,
      borderRadius:150
    },
    programa:{
      fontSize:22,
      fontWeight:'bold',
      color: "#ffffff"
    },
    apresentador:{
      fontSize:14,
      color: "#999999"
    },
    horario:{
      fontSize:10,
      color: "#999999"
    },
    textoFooter:{
      fontSize:12,
      color: "#999"
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
  mais:{
    width:40,
    height:40,
    backgroundColor: '#fd082b',
    borderRadius:40,
    position:'relative',
    top:55,
    left:80,
    zIndex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

  iconMais:{
    width:26,
    height:26,
   
},
  load:{
    position:'absolute',
    top:19,
  },

  connection:{
    height:20,
    backgroundColor: '#fd082b',

  },
  rewind:{
    width:20,
    height:20,
  
  }
  });
export default HomeScreen ;