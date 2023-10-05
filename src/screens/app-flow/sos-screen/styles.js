import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scView: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  selfTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: 'rgba(51, 41, 93, 1)',
  },
  checkTxt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(51, 41, 93, 1)',
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 70,
    padding: 1,
  },

  txt1: {
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(3.5),
    fontWeight: '700',
    color: 'rgba(51, 41, 93, 1)',
  },
  txt2: {
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'rgba(51, 41, 93, 1)',
  },
  txt3: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'rgba(51, 41, 93, 1)',
  },
  txt4: {
    marginTop: 80,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.5),
    marginBottom: -10,
    fontWeight: '700',
    color: 'rgba(51, 41, 93, 1)',
  },
  flatListView: {
    marginTop: 20,
    marginBottom: -100,
    height: responsiveHeight(10),
  },

  parent: {
    // position:'absolute',
    marginTop: 40,
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: '#d6d4df',
    transform: [{scaleX: 1.7}],
    // overflow: 'hidden',
  },
  child: {
    marginTop: 15,
    height: responsiveHeight(60),
    width: responsiveWidth(100),
    borderTopStartRadius: 400,
    borderTopEndRadius: 400,
    backgroundColor: '#33295d',
    // justifyContent:'center',
    alignItems: 'center',
    transform: [{scaleX: 1}],
    // overflow: 'hidden',
  },
  viewS2: {
    transform: [{scaleX: 0.55}],
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  txt5: {
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'white',
  },
  txt6: {
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(4),

    fontWeight: '700',
    color: 'white',
  },
});
export default styles;
