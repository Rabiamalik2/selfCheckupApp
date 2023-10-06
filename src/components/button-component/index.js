import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Dimensions,
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React from 'react';
import Colors from '../../services/constants/colors';
const Button = ({onPress, name, style}) => {
  return (
    <View style={styles.btnSigninView}>
      <TouchableOpacity
        style={[style, styles.toSignin]}
        onPress={() => {
          onPress();
        }}>
        <Text style={[styles.signinS]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnSigninView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinS: {
    fontFamily: 'Poppins',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.lightGrey1,
    fontWeight: '700',
  },
  toSignin: {
    justifyContent: 'center',
    backgroundColor: Colors.orange,
    width: responsiveWidth(80),
    height: responsiveHeight(4),
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
});
