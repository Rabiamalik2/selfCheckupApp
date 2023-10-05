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
        backgroundColor: 'white',
    },
    scView:{
        justifyContent: 'center',
        alignItems:'center',
        marginTop:30,
        flexDirection:'row',
        marginBottom:10,
    },
    selfTxt:{
        fontFamily:'Poppins-Bold',
        fontSize:responsiveFontSize(5),
        fontWeight:'bold',
        color:'rgba(51, 41, 93, 1)',
    },
    checkTxt:{
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        fontSize:responsiveFontSize(5),
        fontWeight:'bold',
        color:'white',
        backgroundColor:'rgba(51, 41, 93, 1)',
        marginHorizontal: 10,
        alignItems:'center',
        borderWidth: 1,
        borderRadius:70,
        padding:1
    },
   
    txt1:{
        alignItems:'center',
        marginTop:30,
        fontFamily:'Poppins-Regular',
        fontSize:responsiveFontSize(2),
        fontWeight:'400',
        color:'black',
    },
    parent : {
        top:50,
        height : responsiveHeight(100),
        width :  responsiveWidth(100),
        borderTopStartRadius:500,
        borderTopEndRadius:500,
        backgroundColor:'#d6d4df',
        //borderBottomStartRadius : 200,
        //borderBottomEndRadius : 200,
        //overflow : 'hidden',
        transform : [ { scaleX : 1.5 } ],
        overflow:"hidden"
    },
    child : {
        marginTop:15,
        height : responsiveHeight(100),
        width :  responsiveWidth(100),
        borderTopStartRadius:400,
        borderTopEndRadius:400,
        backgroundColor : '#33295d',
       // justifyContent:'center',
        alignItems:"center",
        transform : [ { scaleX : 1 } ],
        overflow:"hidden"
    },
    viewS2:{
        transform :[{scaleX:0.7}],
        alignItems:"center", 
        marginTop:50, 
        justifyContent:'center',
    },
    compCS:{
        fontSize: responsiveFontSize(10), 
        color : 'white',
    },
    contactAddedTxt:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        color: "white",
        fontFamily: 'Poppins-Medium',
        fontWeight: "bold",
        fontSize: responsiveFontSize(4),
    },
    subTxt:{
        textAlign:'center',
        color:'white',
        padding:20,
        fontFamily: 'Poppins-Light',
        fontSize:responsiveFontSize(1.7),
        marginTop: 12,
        fontWeight: "200",
    },
});
export default styles