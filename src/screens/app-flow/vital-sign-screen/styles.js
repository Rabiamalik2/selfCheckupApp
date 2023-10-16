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
    height: responsiveHeight(80),
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    overflow: 'hidden',
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.5}],
  },
  childView: {
    marginTop: 13,
    width: responsiveWidth(100),
    height: responsiveHeight(80),
    borderTopStartRadius: 300,
    borderTopEndRadius: 300,
    backgroundColor: Colors.purple,
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  viewS7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  viewS8: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toStyle2: {
    paddingLeft: 6,
  },
  txtS3: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsRegular,
  },
  txtS4: {
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsExtraBold,
  },
  txtS7: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.5),
  },
  viewS2: {
    transform: [
      {
        scaleX: 0.64,
      },
    ],
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  Save: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  crtAccS: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
  },
});
export default styles;
