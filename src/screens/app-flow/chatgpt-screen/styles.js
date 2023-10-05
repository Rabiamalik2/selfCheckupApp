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
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  viewS1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtS1: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: 'rgba(51, 41, 93, 1)',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent:'center',
    left: -25
  },
  icon: {
    left: -80,
    fontSize: responsiveFontSize(4),
    color: '#33295d',
  },
  parent: {
    flex: 1,
    top: 30, 
    height: responsiveHeight(80),
    width: responsiveWidth(100),
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    backgroundColor: '#d6d4df',
    //borderBottomStartRadius : 200,
    //borderBottomEndRadius : 200,
    //overflow : 'hidden',
    transform: [{scaleX: 1.78}],
    //  overflow: 'hidden',
  },
  child: {
    flex: 1,
    marginTop: 15,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    backgroundColor: '#33295d',
    transform: [{scaleX: 1}],
    // overflow: 'hidden',
  },
  viewS2: {
    flex: 1,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    marginTop: 40,
    marginBottom: 30,
    transform: [{scaleX: 0.5}],
    zIndex: 4
  },
  inputContainer: {
    justifyContent:'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    backgroundColor: '#3B5998',
    borderRadius: 17,
  },
});
export default styles;
