import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,SafeAreaView ,Text,FlatList} from 'react-native'
import {Card} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize';
import BackButton from '../components/BackButton';
import users from "../data"



const DetailScreen=({navigation})=>{
return(
    <View>
         {/* <BackButton goBack={navigation.goBack} /> */}
    
    <Text>Details Screen</Text>
    </View>
)
}

export default DetailScreen