import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../../services/constants/colors';
import Fonts from '../../../services/constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // flexGrow: 0,
    backgroundColor: Colors.screenBackground,
  },
  scView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 30,
    flexDirection: 'row',
    // marginBottom: 10,
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
  txtSub: {
    paddingVertical: 1,
    paddingTop: 10,
    textAlign: 'center',
    color: Colors.purple,
    padding: 20,
    fontFamily: Fonts.poppinsThin,
    fontSize: responsiveFontSize(3.2),
    marginTop: 30,
  },
  txt: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    marginBottom: 20,
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
    marginTop: 60,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  subTxt: {
    paddingVertical: 1,
    paddingTop: 10,
    textAlign: 'center',
    color: Colors.purple,
    padding: 20,
    fontFamily: Fonts.poppinsExtraBold,
    fontSize: responsiveFontSize(2.3),
    marginTop: 12,
  },
  btnView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxtStyle: {
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  btnToStyle: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  btnView1: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxtStyle1: {
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  btnToStyle1: {
    justifyContent: 'center',
    backgroundColor: Colors.purple,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  viewCombo: {
    flexDirection: 'row',
  },
  btnView2: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  btnTxtStyle2: {
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.lightGrey1,
  },
  btnToStyle2: {
    justifyContent: 'center',
    backgroundColor: Colors.purple,
    width: responsiveWidth(38),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  btnView3: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxtStyle3: {
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  btnToStyle3: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(38),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  txt1: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.7),
    color: Colors.white,
  },
  Save: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 4,
  },
  westStyle: {
    left: -60,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
  txtStyle1: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    marginBottom: 20,
  },

  txtStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  txtStyle3: {
    borderColor: Colors.white,
    borderBlockColor: Colors.white,
  },
  options: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.7),
    // alignItems: 'center',
    // justifyContent:'center'
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: Colors.white,
    fontFamily: Fonts.poppinsExtraBold,
    textAlign: 'center',
  },
  modalText: {
    color: Colors.white,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
