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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(40),
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2),
    color: Colors.black,
    marginBottom: 10,
    textAlign: 'center',
  },
  healthTo: {
    flex: 1.4,
    marginLeft: 20,
    marginTop: 20,
  },
  healthView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
