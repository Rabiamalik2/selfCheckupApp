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
    backgroundColor: Colors.white,
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
  iconStyle: {
    left: -60,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
  txt1: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
    color: Colors.black,
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
    backgroundColor: Colors.purple,
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
    textAlign: 'center',
    color: Colors.white,
    padding: 20,
    fontFamily: Fonts.poppinsThin,
    fontSize: responsiveFontSize(1.7),
    marginTop: 12,
  },
});
export default styles;
