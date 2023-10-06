import {StyleSheet, Text, View, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {
  Dimensions,
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const PasswordInput = ({placeholder, secureTextEntry}) => {
  return (
    <View style={styles.viewpass}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        secureTextEntry={secureTextEntry}
        style={styles.textPsdS}
      />
      <Entypo name="eye-with-line" style={styles.icon1S} />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  viewpass: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#3D3566',
    borderColor: '#D6D4DF',
    borderWidth: 2,
    opacity: 0.5,
  },
  icon1S: {
    fontSize: responsiveFontSize(2.5),
    color: 'white',
    left: -30,
    alignItems: 'center',
  },
  textPsdS: {
    color: 'white',
    flexWrap: 'wrap',
    paddingVertical: 0,
    marginLeft: 15,
    marginRight: -100,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
    height: responsiveHeight(5),
  },
});
