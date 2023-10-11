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
    backgroundColor: Colors.white,
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
    marginTop: 30,
    width: responsiveWidth(100),
    height: responsiveHeight(73),
    //borderRadius:800,
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 2}],
  },
  childView: {
    //To make Circle Shape
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
    transform: [
      {
        scaleX: 0.5,
      },
    ],
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  userCS: {
    fontSize: responsiveFontSize(7),
    color: Colors.white,
  },

  btnView: {
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regBtnS: {
    fontFamily: Fonts.poppinsExtraBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  regToS: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    color: 'white',
  },
  fbToS: {
    marginVertical:4,
    backgroundColor: Colors.oceanBlue,
    justifyContent: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,

  },
  signfbS: {
    color: Colors.white,
  },
  crtAccS: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
  },
});
export default styles;
