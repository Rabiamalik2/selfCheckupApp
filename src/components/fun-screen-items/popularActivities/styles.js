import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        // alignItems: 'center',
       // backgroundColor: '#2c3e50',
    },
    image:{
        flex:1,
        justifyContent:"center",
      //  alignItems:'center',
        height: responsiveHeight(10),
        width: responsiveWidth(40),
        resizeMode:'cover'
    },
    title:{
        flex:1,
        //marginTop:30,
        fontWeight:"700",
        fontFamily:"Poppins-Regular",
        fontSize:responsiveFontSize(2),
        color:"black",
        marginBottom:10,
        textAlign:"center",
    },
});

export default styles