import {StyleSheet, Text, View, TextInput} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../services/constants/colors';
const Input = ({
  placeholder,
  value,
  keyboardType,
  password,
  picker,
  error,
  onChangeText,
  OnSubmitEditting,
  returnKeyType,
  autoCapitalize,
  name,
  onFocus,
  editable,
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.inpMainView}>
      <View style={styles.txtinpView}>
        <TextInput
          autoCapitalize={autoCapitalize}
          value={value}
          onSubmitEditing={OnSubmitEditting}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          secureTextEntry={hidePassword}
          placeholder={placeholder}
          placeholderTextColor="white"
          keyboardType={keyboardType}
          onFocus={onFocus}
          editable={editable}
          style={styles.textiS}
        />
        {password && (
          <Entypo
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
            name={hidePassword ? 'eye' : 'eye-with-line'}
            style={styles.icon1S}
          />
        )}
        {picker && (
          <MaterialIcons name="arrow-drop-down" style={styles.iconPicker} />
        )}
      </View>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  txtinpView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.purple,
    borderColor: Colors.lightGrey,
    borderWidth: 2,
    padding: 1.7,
    opacity: 0.5,
  },
  textiS: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    left: 10,
    flexWrap: 'wrap',
    color: Colors.white,
  },
  icon1S: {
    left: -40,
    fontSize: responsiveFontSize(2.5),
    color: Colors.lightGrey,
  },
  iconPicker: {
    left: 230,
    fontSize: responsiveFontSize(4),
    color: Colors.white,
  },
  inpMainView: {
    flex: 0,
    marginTop: 15,
    bottom: 20,
    alignItems: 'center',
  },
});
