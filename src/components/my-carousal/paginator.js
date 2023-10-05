import { View, Text ,StyleSheet, Animated, useWindowDimensions} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import React from 'react'

export default function Paginator({data , scrollX}) {
    const {width} =useWindowDimensions();
  return (

    <View style={{flexDirection:"row",bottom:170,alignContent:"center", justifyContent:"center", }}>
    {
        data.map((_, i)=>{
            const inputRange = [(i-1)* width, i*width, (i+1)*width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange : [10,10,10],
                extrapolate: 'clamp'
            });
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange : [0.2,1,0.2],
                extrapolate: 'clamp'

            });

            return <Animated.View style = {[styles.dot,
            {
                width: dotWidth,
                opacity
            }]} 
            key={i.toString()}/>
        })
    }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
    dot:{
        height: responsiveHeight(1.2),
        width:responsiveWidth(2.3),
        borderRadius:100, 
        marginHorizontal:5,
        backgroundColor:'rgba(255, 136, 69, 1)',
    },
});