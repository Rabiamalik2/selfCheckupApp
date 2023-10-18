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
    color: 'white',
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
    color: Colors.black,
  },
  parent: {
    top: 50,
    // flex:1,
    width: responsiveWidth(100),
    borderTopStartRadius: 500,
    borderTopEndRadius: 500,
    backgroundColor: Colors.lightGrey,
    transform: [{scaleX: 1.5}],
    overflow: 'hidden',
  },
  child: {
    marginTop: 15,
    // flex:1,
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    transform: [{scaleX: 1}],
    overflow: 'hidden',
  },
  viewS2: {
    transform: [{scaleX: 0.55}],
    // alignItems: 'center',
    marginTop: responsiveHeight(10),
    // justifyContent: 'center',
  },
  mainTxt: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.white,
    marginBottom: 30,
  },
  subTxt: {
    paddingLeft: 20,
    alignItems: 'center',
    fontFamily: Fonts.poppinsBold,
    fontSize: responsiveFontSize(1.7),
    color: Colors.white,
  },
  icon1View: {
    marginHorizontal: 4,
    width: responsiveWidth(5),
    height: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 450,
    backgroundColor: Colors.white,
  },
  icon1: {
    textAlign: 'center',
    fontSize: responsiveFontSize(7),
  },
  btnView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnS: {
    fontFamily: Fonts.poppinsBold,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.lightGrey1,
  },
  saveToS: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  westIcon: {
    left: -60,
    fontSize: responsiveFontSize(4),
    color: Colors.purple,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.skyBlue,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.darkPink,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor:Colors.purple,
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
  pickerView: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderRadius: 12,
    color: Colors.lightGrey,
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
    // backgroundColor:Colors.lightGrey,
    marginTop: 4,
    fontSize: responsiveFontSize(2),
  },
  pickerItem: {
    fontSize: responsiveFontSize(1.7),
  },
});
export default styles;
