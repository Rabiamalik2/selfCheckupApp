import { StyleSheet } from 'react-native';
import {
    Dimensions,
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
        transform :[{scaleX:0.5}],
        alignItems:"center", 
        marginTop:25, 
        justifyContent:'center'
    },
    lockView:{
        marginTop:15, 
        width:  responsiveWidth(16),
        height: responsiveHeight(8),
        borderRadius:450,
        backgroundColor: 'white',
        alignItems:"center",  
        justifyContent:"center",
        marginBottom:20,
    },
    lock:{
        fontSize: responsiveFontSize(4),
        color:"#33295d",
    },
    fpTxt:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
        color: "white",
        fontFamily: 'Poppins-Medium',
        fontWeight: "bold",
        fontSize: responsiveFontSize(4),
        marginBottom:1,
    },
    item: {
        textAlign:'center',
        color:'white',
        padding:20,
        fontFamily: 'Poppins-Light',
        fontSize:responsiveFontSize(2),
        fontWeight: "200",
      },
      viewpass:{  
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        flexDirection:"row",
        marginTop:20,
        backgroundColor: 'rgba(214, 212, 223, 1)',
        opacity:0.5,
    },
    icon1S:{
        fontSize: responsiveFontSize(2.5),
        color:'white',
        left:-30,
        alignItems:'center'
    },
    textPsdS:{
        flexWrap:'wrap',
        paddingVertical: 0,
        marginLeft:15,
        marginRight:-100,
        paddingVertical: 0,
        alignItems:"center",
        justifyContent:"center",
        width:responsiveWidth(100),
        height: responsiveHeight(5),
    },
    btnSigninView:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },
    signinS:{
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:"#f7f7f7",
        fontWeight: "700",
    },
    toSignin:{
        justifyContent:"center",
        backgroundColor: "#ff8945",
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        marginTop:10,
      },
      viewS7:{
        flexDirection:"row", 
        alignItems:"center", 
        marginTop:20, 
        justifyContent:"center"
    },
    toStyle2:{
        paddingLeft: 6
    },
    txtS3:{ 
        color:"#33295d" ,
        fontFamily:"Poppins",
        fontWeight: "400",
    },
    txtS4:{
        flex: 1, 
        paddingVertical: 0, 
        color: "#ff8945",
        fontWeight: "700",
        fontFamily:"Poppins",
    }, 
});
export default styles