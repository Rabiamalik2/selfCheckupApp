import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../../services/constants/colors';
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
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: Colors.purple,
  },
  checkTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: Colors.white,
    backgroundColor: Colors.purple,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 70,
    padding: 1,
  },
  youtubePlayer: {
    alignSelf: 'center',
    height: responsiveHeight(40),
    width: responsiveWidth(80),
  },
  txt1: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
    color: Colors.purple,
  },
  parent: {
    top: 50,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    backgroundColor: Colors.lightGrey,
    //borderBottomStartRadius : 200,
    //borderBottomEndRadius : 200,
    //overflow : 'hidden',
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
    // justifyContent:'center',
    alignItems: 'center',
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  viewS2: {
    transform: [{scaleX: 0.7}],
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  compCS: {
    fontSize: responsiveFontSize(10),
    color: Colors.white,
  },
  contactAddedTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(4),
  },
  subTxt: {
    textAlign: 'left',
    color: Colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '400',
  },
  play: {
    fontSize: responsiveFontSize(8),
    color: Colors.white,

    position: 'absolute',
    marginTop: 120,
    // height: responsiveHeight(10),
    // width: responsiveWidth(22)
  },
  videoView: {
    alignItems: 'center',
    height: responsiveHeight(40),
    width: responsiveWidth(100),
  },
  viewTxt: {marginTop: 10, marginLeft: 50},
});
export default styles;
