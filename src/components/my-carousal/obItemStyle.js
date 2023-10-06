import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    top: -30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    //marginTop:30,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(4),
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2),
    paddingHorizontal: 34,
    color: Colors.white,
    //marginBottom:10,
    textAlign: 'center',
  },
});

export default styles;
