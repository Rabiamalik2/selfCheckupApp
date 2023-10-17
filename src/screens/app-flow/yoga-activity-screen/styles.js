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
    backgroundColor: Colors.screenBackground,
  },
  scView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  selfTxt: {
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(5),
    color: Colors.purple,
  },
  checkTxt: {
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
  imgView: {
    alignItems: 'center',
    height: responsiveHeight(37),
    width: responsiveWidth(100),
  },
  txt1: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom:30,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(3),
    color: Colors.purple,
  },
  parent: {
    top: 50,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
  },
  child: {
    marginTop: 15,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  viewS2: {
    transform: [{scaleX: 0.7}],
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  compCS: {
    fontSize: responsiveFontSize(10),
    color: Colors.white,
  },
  contactAddedTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
  },
  subTxt: {
    marginTop: 20,
    textAlign: 'left',
    color: Colors.black,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.5),
  },
  play: {
    fontSize: responsiveFontSize(8),
    color: Colors.white,
    position: 'absolute',
    marginTop: 120,
  },
  yogaActTxt: {
    alignItems: 'center',
  },
  imgStyle: {
    alignItems: 'center',
    height: responsiveHeight(35),
    width: responsiveWidth(80),
  },
  inpStyle: {
    marginTop: 10,
    marginLeft: 50,
  },
  txtStyle: {
    marginTop: 10,
    marginLeft: 50,
  },
});
export default styles;
