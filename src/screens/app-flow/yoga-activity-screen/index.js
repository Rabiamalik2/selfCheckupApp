//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import styles from './styles';
import Images from '../../../services/constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
// create a component

const YogaActivityScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.txt1}> Yoga Activity</Text>
        <View style={{alignItems:'center', height: responsiveHeight(37), width: responsiveWidth(100)}}>
        <Image source={Images.person} 
            style={{alignItems:'center', height: responsiveHeight(35), width: responsiveWidth(80)}}/>
        </View>
        </View>
        <View style={{ marginTop:10,marginLeft:50}}>
        <TextInput placeholder='Type Here' 
            style={{height: responsiveHeight(6), width: responsiveWidth(80), backgroundColor:'#f7f7f7'}}
        />
        <Text style={styles.subTxt}>Amazing Yoga Trainer: Samina Naz {'\n'}9:20 am-12/03/2023 </Text>
        </View> 
        </SafeAreaView>
    );
};



//make this component available to the app
export default YogaActivityScreen;
