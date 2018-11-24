import React, { Component } from 'react';
import { StyleSheet,Text,View,Image} from 'react-native';
import axios from 'axios';
export default class Cover extends Component{

    constructor(props){
        super(props);
        this.state = {
          img : require('../img/capa.jpg'),
          request:[]
        }
    }
  componentWillMount(){
    axios.get('http://radioapp-com.umbler.net/api/radio').then((response)=>{
      this.setState({request: response.data});
    })
    .catch(()=>{
    console.warn("Deu Ruim Na Response");
    })
  }

  render() {
    return (

    <View style={styles.topo}>
    <View style={styles.ImageArea}>
        <Image style ={styles.imgPrograma} source={this.state.img}/>
    </View>
    <View style ={styles.ajusteInfoRadio}>
       <Text style ={styles.programa}>{this.state.request.map((item)=>{return <Text key={item._id}>{item.ProgramaFM}</Text>})}</Text>
       <Text style = {styles.apresentador}>{this.state.request.map((item)=>{return <Text key={item._id}>{item.ApresentadorFM}</Text>})}</Text>
       <Text style = {styles.horario}>{this.state.request.map((item)=>{return <Text key={item._id}>{item.HoraFM}</Text>})}</Text>
    </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  topo:{

    alignItems: 'center',
    flex:7,
  },
    ImageArea:{
    width:220,
    height:220,
    },
    iconMais:{
    width:26,
    height:26,
    },
    ajusteInfoRadio:{
        marginTop:10,
        height:70,
        alignItems: 'center',
      },
      imgPrograma:{
        width:200,
        height:200,
        marginTop:10,
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
      }
});
