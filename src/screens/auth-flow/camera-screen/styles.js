import { size } from '@shopify/react-native-skia';
import { StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    container: {
       // flex:1,
        backgroundColor: 'white',
    },
    bgImgStyle:{
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        overflow:'visible',
    },
    btn:{
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        backgroundColor:'white'

    }

});
export default styles