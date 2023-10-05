import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    viewS1:{
        marginTop:30,
        flexDirection:'row',
        marginBottom:10,
      },
      txtS1:{
        fontFamily:'Poppins-Bold',
        fontSize:responsiveFontSize(5),
        fontWeight:'bold',
        color:'rgba(51, 41, 93, 1)',
      },
      txtS2:{
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
      parentView: {
        //To make Circle Shape
        marginTop: 30,
        width:  responsiveWidth(100),
        height: responsiveHeight(73),
        //borderRadius:800,
        borderTopStartRadius : 300,
        borderTopEndRadius :300,
        borderBottomStartRadius :300,
        borderBottomEndRadius : 300,
        overflow : 'hidden',
        backgroundColor: '#d6d4df',
        transform : [ { scaleX : 2 } ],
        
    },
    childView: {
        //To make Circle Shape
        marginTop: 13,
        width:  responsiveWidth(100),
        height: responsiveHeight(70),
        borderTopStartRadius : 300,
        borderTopEndRadius : 300,
        borderBottomStartRadius : 300,
        borderBottomEndRadius : 300,
        backgroundColor: '#33295d',
        transform : [ { scaleX : 1 } ],
        overflow:"hidden"
    },
 
    
    viewS2:{ 
        transform :
        [ 
            {
                scaleX : 0.5
            } 
        ],
        alignItems:"center", 
        marginTop:20, 
        justifyContent:"center",
       
    },
    userCS:{
        fontSize: responsiveFontSize(7), 
        color : 'white',

    },
   

    btnView:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
    },
    regBtnS:{
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:"#f7f7f7",
        fontWeight: "700",
    },
    regToS:{
        justifyContent:"center",
        backgroundColor: "#ff8945",
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        marginTop:-5,
        color:'white'
    },
    fbToS:{
        backgroundColor: "#3b5998",
        justifyContent:"center",
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        marginTop:5,
    },
    signfbS:{
        color:'white',
    },
    crtAccS:{
        marginBottom:30,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        color: "white",
        fontFamily:"Poppins",
        fontWeight: "bold",
        fontSize: responsiveFontSize(4),
    },

     
});
export default styles