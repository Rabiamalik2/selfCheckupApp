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
        color:Colors.white,
        backgroundColor:Colors.purple,
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
        color:Colors.white,
    },
    parent: {
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
        backgroundColor: Colors.lightGrey,
        transform : [ { scaleX : 1.5 } ],
        
    },
    child: {
        //To make Circle Shape
        marginTop: 13,
        width:  responsiveWidth(100),
        height: responsiveHeight(70),
        borderTopStartRadius : 300,
        borderTopEndRadius : 300,
        borderBottomStartRadius : 300,
        borderBottomEndRadius : 300,
        backgroundColor: Colors.purple,
        transform : [ { scaleX : 1 } ],
        overflow:"hidden"
    },
    viewS2:{
        transform :[{scaleX:0.7}],
        alignItems:"center", 
        marginTop:50, 
        justifyContent:'center',
    },
    iconView:{
        marginTop:15, 
        width:  responsiveWidth(21),
        height: responsiveHeight(9),
        borderRadius:500,
        backgroundColor: Colors.white,
        alignItems:"center",  
        justifyContent:"center",
        marginBottom:20,
    },
    icon:{
        
        textAlign:'center',
        fontSize: responsiveFontSize(5.5),
        color:Colors.purple,
    },
    mainTxt:{
        textAlign:'center',
        //alignItems:'center',
        marginTop:10,
        fontFamily:'Poppins-Regular',
        fontSize:responsiveFontSize(3.5),
        fontWeight:'700',
        color:Colors.white,
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
       // marginHorizontal:4,
        width:  responsiveWidth(20),
        height: responsiveHeight(2),
        alignItems:"center",  
        justifyContent:"center",
        borderRadius:450,
        backgroundColor: Colors.white,
    },
    icon1:{ 
        right:-30,
        color:Colors.white,
        //textAlign:'center',
        fontSize: responsiveFontSize(5.5),
    },
    icon2:{ 
        right:-35,
        paddingTop:8,
        color:Colors.white,
        textAlign:'center',
        fontSize: responsiveFontSize(3),
    },
    txtinpView:{
      
        width:responsiveWidth(80),
        height: responsiveHeight(5),
        borderRadius: 12,
        marginTop:20, 
        justifyContent:"center",
        backgroundColor: Colors.purple,
        opacity:0.5,

    },
    toNext: {
        justifyContent: "center",
        backgroundColor: Colors.orange,
        width: responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
    },
    pickerView: {
        width: responsiveWidth(80),
        height: responsiveHeight(5),
        //alignItems: 'center',
        borderRadius: 12,
        backgroundColor: Colors.purple,
        borderColor: Colors.lightGrey,
        borderWidth: 2,
        //padding: 1.7,
        opacity: 0.5,
        justifyContent: 'center',
        marginBottom: 20,
      },
      picker: {
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white,
        marginTop: 4,
        //padding: 1.7,
        fontSize: responsiveFontSize(1),
      },
      pickerItem: {
        fontSize: responsiveFontSize(1.7),
      },
    textiS:{
        right:-200,
        flexWrap:'wrap',
        fontSize: responsiveFontSize(1.5),
        left:10,
       // marginLeft:10,
        flexWrap:'wrap',
      //  marginRight:200,
        paddingVertical: 0,
    },
    textiS1:{
        
        flexWrap:'wrap',
        fontSize: responsiveFontSize(1.5),
        left:-30,
       // marginLeft:10,
        flexWrap:'wrap',
      //  marginRight:200,
        paddingVertical: 0,
    },
    textiS2:{
        
        flexWrap:'wrap',
        fontSize: responsiveFontSize(1.5),
        left:-45,
       // marginLeft:10,
        flexWrap:'wrap',
      //  marginRight:200,
        paddingVertical: 0,
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
        color: Colors.white,
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