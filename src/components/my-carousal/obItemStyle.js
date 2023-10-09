import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';

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
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(4),
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(2),
    paddingHorizontal: 34,
    color: Colors.white,
    textAlign: 'center',
  },
  obView: {
    flex: 0.6,
    marginTop: 130,
  },
  itemView: {
    flex: 1,
    marginTop: 50,
  },
});

export default styles;
