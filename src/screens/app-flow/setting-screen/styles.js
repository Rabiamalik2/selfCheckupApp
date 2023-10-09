import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../../services/constants/colors';
import Fonts from '../../../services/constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 0,
    marginTop: 20,
  },
  istView: {
    flexDirection: 'row',
  },
  arrowIcon: {
    marginHorizontal: 10,
    fontSize: responsiveFontSize(3),
  },
  txtProfile: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: 150,
  },
  optionStyle: {
    marginTop: 30,
    height: responsiveHeight(80),
    width: responsiveWidth(100),
    borderColor: Colors.black,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  infoTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: responsiveFontSize(1.5),
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  biView: {
    marginTop: 10,
    paddingLeft: 10,
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    borderColor: Colors.black,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  biIcon: {
    color: Colors.skyBlue,
    fontSize: responsiveFontSize(3),
  },
  pInfoIcon: {
    color: Colors.yellow,
    fontSize: responsiveFontSize(3),
  },
  hbIcon: {
    color: Colors.oceanBlue,
    fontSize: responsiveFontSize(3),
  },
  medicIcon: {
    color: Colors.pink,
    fontSize: responsiveFontSize(3),
  },
  allergiesIcon: {
    color: Colors.yellow,
    fontSize: responsiveFontSize(3),
  },
  haIcon: {
    color: Colors.darkPink,
    fontSize: responsiveFontSize(3),
  },
  stIcon: {
    color: Colors.yellow,
    fontSize: responsiveFontSize(3),
  },
  biTxt: {
    marginLeft: 20,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  historyView: {
    marginTop: 10,
  },
  logout: {
    color: Colors.pink,
    fontSize: responsiveFontSize(3),
  },
  deleteTxt: {
    color: Colors.pink,
    fontSize: responsiveFontSize(2),
  },
  logoutView: {
    marginTop: 10,
    paddingLeft: 10,
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    borderColor: Colors.black,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignContent: 'center',
  },
});
export default styles;
