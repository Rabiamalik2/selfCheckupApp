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

  txt1: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
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
    transform: [{scaleX: 0.56}],
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  iconView: {
    marginTop: 15,
    width: responsiveWidth(21),
    height: responsiveHeight(9),
    borderRadius: 500,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  westIcon: {
    left: -60,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
  icon: {
    textAlign: 'center',
    fontSize: responsiveFontSize(5.5),
    color: Colors.purple,
  },
  mainTxt: {
    alignItems: 'center',
    marginTop: 10,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2),
    color: Colors.white,
  },
  subView: {
    padding: 10,
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    borderRadius: 10,
    backgroundColor: Colors.orange,
    marginTop: 20,
  },
  subTxt: {
    paddingLeft: 20,
    alignItems: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(1.7),
    color: Colors.white,
  },
  icon1View: {
    left: 230,
    marginHorizontal: 3,
    width: responsiveWidth(5),
    height: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 450,
    backgroundColor: Colors.white,
  },
  icon1: {
    textAlign: 'center',
    fontSize: responsiveFontSize(7),
  },
  flatListView: {
    marginTop: 20,
  },
});
export default styles;
