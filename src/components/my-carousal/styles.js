import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  parent: {
    top: 250,
    height: responsiveHeight(65),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.lightGrey,
    //borderBottomStartRadius : 200,
    //borderBottomEndRadius : 200,
    //overflow : 'hidden',
    transform: [{scaleX: 2}],
    overflow: 'hidden',
  },
  child: {
    marginTop: 15,
    height: responsiveHeight(65),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.purple,
    // justifyContent:'center',
    alignItems: 'center',
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  registerTo: {
    justifyContent: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(6.5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
    backgroundColor: Colors.orange,
  },
  registerTxt: {
    color: Colors.white,
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: responsiveFontSize(2),
  },
  signinTo: {
    justifyContent: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(6.5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
    backgroundColor: Colors.purple,
    borderColor: Colors.lightGrey,
    borderWidth: 2,
    opacity: 0.5,
    borderColor: Colors.white,
  },
  signinTxt: {
    color: 'rgba(214, 212, 223, 1)',
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: responsiveFontSize(2),
  },
  termsTo: {
    marginTop: 35,
    alignItems: 'center',
  },
  termsTxt: {
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: responsiveFontSize(1.5),
  },
});

export default styles;
