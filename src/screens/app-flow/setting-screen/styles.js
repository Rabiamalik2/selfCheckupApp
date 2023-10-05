import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors} from 'react-native-swiper-flatlist/src/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    //alignItems:'center'
    marginTop: 20,
  },
  istView: {
    flexDirection: 'row',
  },
  arrowIcon: {
    marginHorizontal: 10,
    fontSize: responsiveFontSize(3),
  },
  txtProfile: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: 150,
  },
  optionStyle: {
    marginTop: 30,
    height: responsiveHeight(80),
    width: responsiveWidth(100),
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  infoTxt: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: 'black',
  },
  biView: {
    marginTop: 10,
    paddingLeft: 10,
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    borderColor: 'black',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignItems:'center'
  },
  biIcon: {
    color: '#87CEEB',
    fontSize: responsiveFontSize(3),
  },
  pInfoIcon: {
    color: '#FFA400',
    fontSize: responsiveFontSize(3),
  },
  hbIcon: {
    color: '#20b2aa',
    fontSize: responsiveFontSize(3),
  },
  medicIcon: {
    color: '#e75480',
    fontSize: responsiveFontSize(3),
  },
  allergiesIcon: {
    color: '#ffa500',
    fontSize: responsiveFontSize(3),
  },
  haIcon: {
    color: '#ff80ff',
    fontSize: responsiveFontSize(3),
  },
  stIcon: {
    color: '#ff80ff',
    fontSize: responsiveFontSize(3),
  },
  biTxt: {
    marginLeft: 20,
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins',
    color: 'black',
  },
  historyView: {
    marginTop: 10,
  },
  logout: {
    color: '#e75480',
    fontSize: responsiveFontSize(3),
  },
  deleteTxt: {
    color: '#e75480',
    fontSize: responsiveFontSize(2),
  },
  logoutView: {
    marginTop: 10,
    paddingLeft: 10,
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    borderColor: 'black',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignContent: 'center',
  },
});
export default styles;
