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
    backgroundColor: Colors.screenBackground,
    // flexGrow: 0,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: Colors.white,
  },
  scView: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: -100,
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
    marginTop: 120,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(3.5),
    color: Colors.purple,
  },
  txt2: {
    marginTop: 30,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.purple
  },
  txt3: {
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.purple,
  },
  txt4: {
    marginTop: 8,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
    marginBottom: -10,
    color: Colors.purple,
  },
  flatListView: {
    marginTop: 20,
    marginBottom: 0,
    height: responsiveHeight(10),
  },

  parent: {
    marginTop: 30,
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.7}],
  },
  child: {
    marginTop: 15,
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    transform: [{scaleX: 1}],
  },
  viewS2: {
    transform: [{scaleX: 0.55}],
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  txt5: {
    marginTop: 20,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.white,
  },
  txt6: {
    marginTop: 20,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
    color: Colors.white,
  },
  iconSty: {
    left: -60,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
});
export default styles;
