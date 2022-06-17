import React from 'react'

import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View,Image,Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize'

export default function StartScreen({ navigation }) {
  return (
    <View style={{marginTop:100, }} >
      <Image source={require('../assets/logo.png')} style={{marginLeft:150,width:100,height:100}} />
      <View style={{flexDirection:"row",width:"75%",height:"15%",backgroundColor:"#e5e3e3",marginHorizontal:50,borderRadius:30}}>
      <Ionicons
         name="search-outline"
          size={RFValue(35)}
          color="#726f6f"
          //style={[styles.icons,{marginTop:2}]}
           />
           <Text style={{alignSelf:"center",fontWeight:"bold",color:"#726f6f"}}>Search Jobs</Text>
      </View>

      <View style={{flexDirection:"row",marginHorizontal:70, marginTop:20}}>
        <Ionicons
                  name="star"
                  size={RFValue(25)}
                  color="#f7bd4a"
                  //style={[styles.icons,{marginTop:2}]}
              />
        <Text style={{alignSelf:"center",fontWeight:"bold",color:"#000",fontSize:RFValue(15)}}>Get Discovered by Recruiters</Text>
        </View>

      <View style={{flexDirection:"row", marginHorizontal:20,justifyContent:"space-between"}}>
      <Button
        style={{width:RFValue(150),height:RFValue(50)}}
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
      style={{width:RFValue(150),height:RFValue(50)}}
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
      </View>
      </View>
  )
}
