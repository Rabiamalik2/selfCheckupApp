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
    //To make Circle Shape
    marginTop: 20,
    width: responsiveWidth(100),
    height: responsiveHeight(73),
    //borderRadius:800,
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    borderBottomStartRadius: 500,
    borderBottomEndRadius: 500,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 2}],
  },
  childView: {
    //To make Circle Shape
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
  viewS3: {
    marginTop: 15,
    width: responsiveWidth(16),
    height: responsiveHeight(8),
    borderRadius: 450,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gavel: {
    fontSize: responsiveFontSize(4),
    color: Colors.black,
  },
  tcS: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
    marginBottom: 10,
  },
  squareView: {
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    backgroundColor: Colors.purple,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  item: {
    color: Colors.white,
    padding: 9,
    fontFamily: Fonts.poppinsThin,
    fontSize: responsiveFontSize(1.5),
    margin: 10,
  },
  viewS4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  toStyle2: {
    paddingLeft: 3,
  },
  continueTxt: {
    fontSize: responsiveFontSize(1.2),
    color: Colors.white,
    fontFamily: Fonts.poppinsRegular,
  },
  privacyTxt: {
    fontSize: responsiveFontSize(1.2),
    flex: 1,
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsExtraBold,
  },
  viewS5: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreeToStyle: {
    padding: 5,
    fontFamily: Fonts.poppinsExtraBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  toS1: {
    backgroundColor: Colors.orange,
    padding: 10,
    paddingLeft: 130,
    paddingRight: 130,
    borderRadius: 12,
    marginBottom: 5,
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
  viewS8: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtS7: {
    color: Colors.lightGrey,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.4),
  },
});
export default styles;
