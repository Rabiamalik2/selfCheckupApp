
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../../services/constants/colors';
import Fonts from '../../../services/constants/fonts';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 0,
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
  },
  viewS1: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtS1: {
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(5),
    color: Colors.purple,
  },
  txtS2: {
    textAlign: 'center',
    fontFamily: Fonts.poppinsBold,
    fontSize: responsiveFontSize(5),
    color: Colors.white,
    backgroundColor: Colors.purple,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 70,
    padding: 1,
  },
  parentView: {
    marginTop: 20,
    width: responsiveWidth(100),
    height: responsiveHeight(73),
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 2}],
  },
  childView: {
    marginTop: 13,
    width: responsiveWidth(100),
    height: responsiveHeight(70),
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    backgroundColor: Colors.purple,
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  viewS2: {
    transform: [{scaleX: 0.5}],
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  userCS: {
    fontSize: responsiveFontSize(8),
    color: Colors.white,
  },
  regCompTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
    marginBottom: 30,
  },
  item: {
    textAlign: 'center',
    color: Colors.white,
    padding: 15,
    fontFamily: Fonts.poppinsBold,
    fontSize: responsiveFontSize(1.7),
    marginTop: 5,
  },
  btnSigninView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinS: {
    fontFamily: Fonts.poppinsExtraBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  toSignin: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  accTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  regToStyle: {
    paddingLeft: 6,
  },
  txtAcc: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsBold,
  },
  txtReg: {
    flex: 1,
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsExtraBold,
  },
});
export default styles;
