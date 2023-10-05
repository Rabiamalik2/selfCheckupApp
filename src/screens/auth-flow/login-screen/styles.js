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
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    viewS1: {
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: 10,
    },
    txtS1: {
        fontFamily: 'Poppins-Bold',
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
        color: 'rgba(51, 41, 93, 1)',
    },
    txtS2: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(51, 41, 93, 1)',
        marginHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 70,
        padding: 1
    },
    parentView: {
        //To make Circle Shape
        marginTop: 30,
        width: responsiveWidth(100),
        height: responsiveHeight(73),
        //borderRadius:800,
        borderTopStartRadius: 300,
        borderTopEndRadius: 300,
        borderBottomStartRadius: 300,
        borderBottomEndRadius: 300,
        overflow: 'hidden',
        backgroundColor: '#d6d4df',
        transform: [{ scaleX: 2 }],

    },
    childView: {
        //To make Circle Shape
        marginTop: 13,
        width: responsiveWidth(100),
        height: responsiveHeight(70),
        borderTopStartRadius: 300,
        borderTopEndRadius: 300,
        borderBottomStartRadius: 300,
        borderBottomEndRadius: 300,
        backgroundColor: '#33295d',
        transform: [{ scaleX: 1 }],
        overflow: "hidden"
    },
    viewS2: {
        transform: [{ scaleX: 0.5 }],
        alignItems: "center",
        marginTop: 10,
        justifyContent: 'center'
    },
    backArrowView: {
        marginTop: 15,
        width: responsiveWidth(16),
        height: responsiveHeight(8),
        borderRadius: 450,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    backArrow: {
        fontSize: responsiveFontSize(4),
        color: "black",
    },
    wbS: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: responsiveFontSize(4),
        marginBottom: 10,

    },
    wbS1: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        fontSize: responsiveFontSize(2),
        fontWeight: "400",
        color: "white",

    },


    fpassView: {
        marginTop: -6,
        alignItems: 'center'
    },
    fpassToStle: {
        alignItems: 'flex-start',
        left: -100

    },
    txtFpass: {
        color: 'lightgrey'

    },
    viewS7: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "center"
    },
    toStyle2: {
        paddingLeft: 6
    },
    txtS3: {
        color: "#33295d",
        fontFamily: "Poppins",
        fontWeight: "400",
    },
    txtS4: {
        flex: 1,
        paddingVertical: 0,
        color: "#ff8945",
        fontWeight: "700",
        fontFamily: "Poppins",
    },
    btnSigninView: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    signinS: {
        fontFamily: "Poppins",
        justifyContent: "center",
        alignItems: "center",
        color: "#f7f7f7",
        fontWeight: "700",
    },
    toSignin: {
        justifyContent: "center",
        backgroundColor: "#ff8945",
        width: responsiveWidth(80),
        height: responsiveHeight(5),
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
    },
    fpViewS: {
        alignItems: "center",
        marginTop: 20,
        justifyContent: "center"
    },
    fpStyle: {
        opacity: 0.5,
        fontSize: responsiveFontSize(6),
        color: "white"
    },
    flStyle: {
        fontWeight: "400",
        fontFamily: "Poppins",
        color: 'white',
        marginTop: 10,
    },
    googleButtonStyle: {
        marginTop:6,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"

    },
    googleTxt: {
        
        paddingLeft:10,
        color:'white'
    },
    googleAndPhoneStyle:{
        marginTop:6,
        flexDirection: 'row',
         alignItems: "center",
       justifyContent: "center"
     
    },
    verticalLine: {
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        alignItems:'center',
        justifyContent: "center",
        width: responsiveHeight(0.1),
        height: responsiveHeight(0.1),
        backgroundColor: 'lightgray', 
        paddingTop:10,
        paddingBottom:10,
      },
      horizontalLine:{
        top: 20,
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderColor: 'lightgrey'
      }
});
export default styles