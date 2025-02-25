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

  txt1: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.white,
  },
  parent: {
    marginTop: 30,
    width: responsiveWidth(100),
    height: responsiveHeight(73),
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.5}],
  },
  child: {
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
    marginTop: 50,
    justifyContent: 'center',
  },
  iconView: {
    marginTop: 15,
    width: responsiveWidth(21),
    height: responsiveHeight(9),
    borderRadius: 500,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    textAlign: 'center',
    fontSize: responsiveFontSize(5.5),
    color: Colors.purple,
  },
  mainTxt: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(3.5),
    color: Colors.white,
  },
  subTxt: {
    paddingLeft: 20,
    alignItems: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(1.7),
    color: Colors.white,
  },
  icon1View: {
    // marginHorizontal:4,
    width: responsiveWidth(20),
    height: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 450,
    backgroundColor: Colors.white,
  },
  icon1: {
    right: -15,
    color: Colors.white,
    fontSize: responsiveFontSize(5.5),
  },
  icon2: {
    right: -40,
    paddingTop: 8,
    color: Colors.white,
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
  },
  txtStyle: {
    color: Colors.white,
    marginTop: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  toSub: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  pickerView: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderRadius: 12,
    backgroundColor: Colors.purple,
    borderColor: Colors.lightGrey,
    borderWidth: 2,
    opacity: 0.5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    marginTop: 4,
    fontSize: responsiveFontSize(1),
  },
  pickerItem: {
    fontSize: responsiveFontSize(0.5),
  },
});
export default styles;
