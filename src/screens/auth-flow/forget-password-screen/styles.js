import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Fonts from '../../../services/constants/fonts';
import Colors from '../../../services/constants/colors';
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
    fontFamily: Fonts.poppinsExtraBold,
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
    marginTop: 30,
    width: responsiveWidth(100),
    height: responsiveHeight(73),
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 2}],
  },
  childView: {
    marginTop: 13,
    width: responsiveWidth(100),
    height: responsiveHeight(70),
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
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
  backArrowView: {
    marginTop: 15,
    width: responsiveWidth(16),
    height: responsiveHeight(8),
    borderRadius: 450,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: responsiveFontSize(4),
    color: Colors.black,
  },
  fpTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
    marginBottom: 1,
  },
  item: {
    textAlign: 'center',
    color: Colors.white,
    padding: 20,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
  },
  txtinpView: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: Colors.lightGrey,
    opacity: 0.5,
  },
  textiS: {
    paddingHorizontal: 15,
    flexWrap: 'wrap',
    paddingVertical: 0,
  },
  btnSigninView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signinS: {
    fontFamily: Fonts.poppinsBold,
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
    marginTop: 10,
  },
  viewS6: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  toStyle3: {
    paddingLeft: 3,
  },
  accTxt: {
    fontSize: responsiveFontSize(1.4),
    color: Colors.purple,
    fontFamily: Fonts.poppinsBold,
  },
  signinTxt: {
    fontSize: responsiveFontSize(1.4),
    flex: 1,
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsExtraBold,
  },
});
export default styles;
