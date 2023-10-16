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
    justifyContent: 'center',
    // flexGrow: 0,
    backgroundColor: Colors.screenBackground,
    paddingBottom: 100,
  },
  viewS1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtS1: {
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(5),
    color: Colors.purple,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    left: -25,
  },
  icon: {
    left: -80,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
  parent: {
    flex: 1,
    top: 30,
    height: responsiveHeight(80),
    width: responsiveWidth(100),
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.78}],
  },
  child: {
    flex: 1,
    marginTop: 15,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    backgroundColor: Colors.purple,
    transform: [{scaleX: 1}],
    // overflow: 'hidden',
  },
  viewS2: {
    flex: 1,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    marginTop: 40,
    marginBottom: 30,
    transform: [{scaleX: 0.5}],
    zIndex: 4,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    backgroundColor: Colors.oceanBlue,
    borderRadius: 17,
  },
});
export default styles;
