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
    //justifyContent: 'center',
    // alignItems: 'center',
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

  txt1: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: Colors.purple,
  },
  recTxt: {
    alignItems: 'center',
    marginTop: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
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
    // justifyContent:'center',
    alignItems: 'center',
  },
});
export default styles;
