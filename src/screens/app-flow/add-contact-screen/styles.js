import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Colors from '../../../services/constants/colors';
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: Colors.white,
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
        color: Colors.purple,
    },
    checkTxt:{
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        fontSize:responsiveFontSize(5),
        fontWeight:'bold',
        color:'white',
        backgroundColor:Colors.white,
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
        fontSize:responsiveFontSize(2.5),
        fontWeight:'700',
        color:Colors.black,
    },
    parent : {
        top:50,
        height : responsiveHeight(100),
        width :  responsiveWidth(100),
        borderTopStartRadius:500,
        borderTopEndRadius:500,
        backgroundColor:Colors.lightGrey,
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
        backgroundColor : Colors.purple,
       // justifyContent:'center',
        alignItems:"center",
        transform : [ { scaleX : 1 } ],
        overflow:"hidden"
    },
    viewS2:{
        transform :[{scaleX:0.56}],
        alignItems:"center", 
        marginTop:50, 
        justifyContent:'center',
    },

    mainTxt:{
        textAlign:'center',
        alignItems:'center',
        marginTop:10,
        fontFamily:'Poppins-Regular',
        fontSize:responsiveFontSize(1.5),
        fontWeight:'400',
        color:Colors.white,
        marginBottom:30,
    },
    subTxt:{
        paddingLeft:20,
        alignItems:'center',
        fontFamily:'Poppins-Regular',
        fontSize:responsiveFontSize(1.7),
        fontWeight:'700',
        color:Colors.white,
        
    
    },
    icon1View:{
        marginHorizontal:4,
        width:  responsiveWidth(5),
        height: responsiveHeight(2),
        alignItems:"center",  
        justifyContent:"center",
        borderRadius:450,
        backgroundColor: Colors.white,
    },
    icon1:{ 
        textAlign:'center',
        fontSize: responsiveFontSize(7),
    },
    txtinpView:{
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        borderWidth:2,
        marginTop:20, 
        justifyContent:"center",
        backgroundColor: Colors.purple,
        opacity:0.5,
        borderColor: Colors.lightGrey

    },
    textiS:{
        marginLeft:15,
        marginRight:210,
        paddingVertical: 0,
        alignItems:"center",
        justifyContent:"center",
        width: 100,
        height: 40,
    },
    btnView:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
    },
    saveBtnS:{
        fontFamily:"Poppins", 
        justifyContent:"center",
        alignItems:"center",
        color:Colors.lightGrey1,
        fontWeight: "700",
    },
    saveToS:{
        justifyContent:"center",
        backgroundColor: Colors.orange,
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems:'center' ,
        borderRadius: 12,
        marginTop:10,
    },
    
});
export default styles