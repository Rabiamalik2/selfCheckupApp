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
  userCS: {
    fontSize: responsiveFontSize(8),
    color: Colors.white,
  },
  choosePicTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(4),
  },
  camStyle: {
    marginTop: -35,
    left: -30,
  },
  imgCamStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCapture: {
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CaptureToStyle: {
    backgroundColor: Colors.orange,
    padding: 10,
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  txtCapPic: {
    padding: 5,
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  btnGallery: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GalleryToStyle: {
    backgroundColor: Colors.oceanBlue,
    padding: 10,
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  txtGallery: {
    padding: 5,
    fontFamily: Fonts.poppinsExtraBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  btnSkip: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SkipToStyle: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  txtSkip: {
    padding: 5,
    fontFamily: Fonts.poppinsExtraBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.purple,
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
    fontFamily: Fonts.poppinsBold,
    fontSize: responsiveFontSize(1.4),
  },
});
export default styles;
