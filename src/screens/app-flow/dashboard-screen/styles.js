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
    //justifyContent: 'center',
    alignItems: 'center',
    // flexGrow: 0,
    backgroundColor: Colors.white,
  },
  scView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
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
    fontFamily: Fonts.poppinsExtraBold,
    height: responsiveHeight(7),
    width: responsiveWidth(30),
    fontSize: responsiveFontSize(5),
    color: Colors.white,
    backgroundColor: Colors.purple,
    marginHorizontal: 10,
    borderWidth: 0.2,
    borderRadius: 30,
    padding: 1,
  },

  viewS1: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
  },
  viewImg1: {
    paddingVertical: 0,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  img1: {
    paddingVertical: 0,
    height: responsiveHeight(5),
    width: responsiveWidth(12),
  },
  txtImg1: {
    paddingVertical: 0,
    padding: 2,
    paddingTop: 6,
    textAlign: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  viewImg2: {
    paddingVertical: 0,
    justifyContent: 'center',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  img2: {
    paddingVertical: 0,
    height: responsiveHeight(5),
    width: responsiveWidth(13),
  },
  txtImg2: {
    paddingVertical: 0,
    padding: 2,
    paddingTop: 9,
    textAlign: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  viewImg3: {
    paddingVertical: 0,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  img3: {
    paddingVertical: 0,
    height: responsiveHeight(6.5),
    width: responsiveWidth(12),
  },
  txtImg3: {
    paddingVertical: 0,
    padding: 2,
    paddingTop: 6,
    textAlign: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  parent: {
    marginTop: 50,
    height: responsiveHeight(35),
    width: responsiveWidth(100),
    //borderRadius:200,
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    borderBottomStartRadius: 400,
    borderBottomEndRadius: 400,
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
  },
  child: {
    marginTop: 12,
    height: responsiveHeight(32),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    borderBottomStartRadius: 400,
    borderBottomEndRadius: 400,
    backgroundColor: Colors.purple,
    // justifyContent:'center',
    alignItems: 'center',
    transform: [{scaleX: 1}],
  },
  viewS2: {
    transform: [{scaleX: 0.56}],
    alignItems: 'center',
    marginTop: 80,
    justifyContent: 'center',
  },
  viewSos: {
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection:'row',
    backgroundColor: Colors.red,
    width: responsiveWidth(40),
    height: responsiveHeight(15),
    borderRadius: 20,
  },
  iconSos: {
    color: Colors.red,
    fontSize: responsiveFontSize(4),

    borderRadius: 20,
    backgroundColor: Colors.white,
    padding: 5,
  },
  sosTo: {alignItems: 'center', flexDirection: 'row'},
  txtSos: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: responsiveFontSize(8),
    fontFamily: Fonts.poppinsExtraBold,
    padding: 2,
  },
  viewS3: {
    flexDirection: 'row',
    marginTop: 60,
    alignItems: 'center',
  },
  viewImg4: {
    paddingVertical: 0,
    marginHorizontal: 60,
    alignItems: 'center',
  },
  img4: {
    paddingVertical: 0,
    height: responsiveHeight(6.5),
    width: responsiveWidth(14),
  },
  txtImg4: {
    paddingVertical: 0,
    padding: 2,
    paddingTop: 6,
    textAlign: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  viewImg5: {
    paddingVertical: 0,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  img5: {
    paddingVertical: 0,
    height: responsiveHeight(6.5),
    width: responsiveWidth(16),
  },
  txtImg5: {
    paddingVertical: 0,
    padding: 2,
    paddingTop: 6,
    textAlign: 'center',
    fontFamily: Fonts.poppinsExtraBold,
    color: Colors.black,
  },
  iconContact: {
    padding: 10,
    paddingLeft: 40,
    color: Colors.purple,
    fontSize: responsiveFontSize(4),
  },
  iconLogout: {
    padding: 20,
    left: -60,
    color: Colors.black,
    fontSize: responsiveFontSize(3),
  },
  contactTo: {alignItems: 'center', justifyContent: 'center'},
});
export default styles;
