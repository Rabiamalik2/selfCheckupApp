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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    //  alignItems:'center',
    height: responsiveHeight(10),
    width: responsiveWidth(40),
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    //marginTop:30,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.6),
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
