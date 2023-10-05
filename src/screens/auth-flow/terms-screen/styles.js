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
        padding:1,
    },
    parentView: {
        //To make Circle Shape
        marginTop: 20,
        width:  responsiveWidth(100),
        height: responsiveHeight(73),
        //borderRadius:800,
        borderTopStartRadius : 500,
        borderTopEndRadius :500,
        borderBottomStartRadius :500,
        borderBottomEndRadius : 500,
        overflow : 'hidden',
        backgroundColor: '#d6d4df',
        transform : [ { scaleX : 2 } ],
        
    },
    childView: {
        //To make Circle Shape
        marginTop: 13,
        width:  responsiveWidth(100),
        height: responsiveHeight(70),
        borderTopStartRadius : 500,
        borderTopEndRadius : 500,
        borderBottomStartRadius : 500,
        borderBottomEndRadius : 500,
        backgroundColor: '#33295d',
        transform : [ { scaleX : 1 } ],
        overflow:"hidden",
    },
    viewS2:{
      transform :[{scaleX:0.5}],
      alignItems:"center", 
      marginTop:25, 
      justifyContent:'center',
    },
    viewS3:{
      marginTop:15, 
      width:  responsiveWidth(16),
      height: responsiveHeight(8),
      borderRadius:450,
      backgroundColor: 'white',
      alignItems:"center",  
      justifyContent:"center",
    },
    gavel:{
      fontSize: responsiveFontSize(4),
      color:"black",
    },
    tcS:{
      justifyContent:"center",
      alignItems:"center",
      marginTop:20,
      color: "white",
      fontFamily: 'Poppins-Regular',
      fontWeight: "bold",
      fontSize: responsiveFontSize(4),
      marginBottom:10,
    },
    squareView:{  
      width:  responsiveWidth(80),
      height: responsiveHeight(30),
      backgroundColor:'#29214A',
    },
    scrollView:{
      width: "100%",
      height: "100%",
    },
    item: {
      color:'white',
      padding:9,
      fontFamily: 'Poppins-Light',
      fontSize:responsiveFontSize(1.5),
      margin: 10,
      fontWeight: "200",
    },
    viewS4:{
      flexDirection:"row", 
      alignItems:"center", 
      marginTop:20, 
      justifyContent:"center"
  },
  toStyle2:{
      paddingLeft: 3
  },
  continueTxt:{ 
    fontSize: responsiveFontSize(1.2),
      color:"white" ,
      fontFamily:"Poppins-Light",
      fontWeight: "400",
  },
  privacyTxt:{
      fontSize: responsiveFontSize(1.2),
      flex: 1, 
      paddingVertical: 0, 
      color: "#ff8945",
      fontWeight: "700",
      fontFamily:"Poppins",
  }, 
  viewS5:{
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
},
  agreeToStyle:{
  padding:5,
    fontFamily:"Poppins", 
    justifyContent:"center",
    alignItems:"center",
    color:"#f7f7f7",
    fontWeight: "700",
},
  toS1:{
        
    backgroundColor: "#ff8945",
    padding: 10, 
    paddingLeft: 130, 
    paddingRight: 130, 
    borderRadius: 12,
    marginBottom: 5
  },    
  viewS6:{
    flexDirection:"row", 
    alignItems:"center", 
    marginTop:20, 
    justifyContent:"center"
},
toStyle3:{
    paddingLeft: 3
},
accTxt:{ 
  fontSize: responsiveFontSize(1.4),
    color:"#33295d" ,
    fontFamily:"Poppins-Light",
    fontWeight: "500",
},
signinTxt:{
    fontSize: responsiveFontSize(1.4),
    flex: 1, 
    paddingVertical: 0, 
    color: "#ff8945",
    fontWeight: "700",
    fontFamily:"Poppins",
}, 
viewS8:{
  marginTop: 5,
  alignItems:"center", 
  justifyContent:"center",
},
txtS7:{
  color:"#33295d",
  fontFamily:"Poppins",
  fontSize: responsiveFontSize(1.4),
  fontWeight: "400",
},
});
export default styles
