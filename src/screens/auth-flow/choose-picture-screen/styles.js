import { size } from '@shopify/react-native-skia';
import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize} from "react-native-responsive-dimensions";
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
    userCS:{
        fontSize: responsiveFontSize(8), 
        color : 'white',
    },
    choosePicTxt:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        color: "white",
        fontFamily: 'Poppins-Medium',
        fontWeight: "bold",
        fontSize: responsiveFontSize(4),
    },
    camStyle:{
        marginTop:-35, 
        left:-30,     
    },
    imgCamStyle:{
        justifyContent:"center",
        alignItems:"center",
    },
    btnCapture:{
        marginTop:-20,
        justifyContent:"center",
        alignItems:"center"
    },
    CaptureToStyle:{
            
        backgroundColor: "#ff8945",
        padding: 10, 
        width:responsiveWidth(90),
        alignItems:'center' ,
        borderRadius: 12,
        marginBottom: 5
    },   
    txtCapPic:{
        padding:5,
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:"#f7f7f7",
        fontWeight: "700",
    }, 
    btnGallery:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    GalleryToStyle:{
             
        backgroundColor: "#3b5998",
        padding: 10, 
        width:responsiveWidth(90),
        alignItems:'center' ,
        borderRadius: 12,
        marginBottom: 5
    },   
    txtGallery:{
        padding:5,
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:"#f7f7f7",
        fontWeight: "700",
    },
    btnSkip:{
         marginTop:10,
         justifyContent:"center",
         alignItems:"center"
    },
    SkipToStyle:{  
        
        backgroundColor: "#d6d4df",
        padding: 10, 
        width:responsiveWidth(90),
        alignItems:'center' ,
        borderRadius: 12,
        marginBottom: 5
    },   
    txtSkip:{
        padding:5,
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:"#33295d",
        fontWeight: "700",
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