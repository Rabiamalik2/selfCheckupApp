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
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
    color: Colors.purple,
  },
  recTxt: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
    color: Colors.white,
  },
  parent: {
    height: responsiveHeight(30),
    width: responsiveWidth(100),
  },
  child: {
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  flatlistView: {marginTop: 20, height: responsiveHeight(30)},
});
export default styles;
