import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import {useNavigation, StackActions} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import Loader from '../../../components/loader';
import Terms from '../../../components/text-input-component/termsConditions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {registerMe} from '../../../services/apis/auth';
import {CountryPicker} from 'react-native-country-codes-picker';
import styles from './styles';
// create a component
const RegisterScreen = props => {
  const navigation = useNavigation();
  // const Input = useRef(null);
  const firstnameInput = useRef(null);
  const lastnameInput = useRef(null);
  const phoneInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const focusNextInput = nextInputRef => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const [loading, setLoading] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [errors, setErrors] = useState('');

  const handleCountrySelect = country => {
    setCountryCode(country.cca2);
    setShow(false); // Close the country picker modal
  };
  const register = async phoneNumber => {
    try {
      phoneNumber = `${countryCode}${phone}`;
      console.log(phoneNumber);
      setLoading(true);
      const response = await registerMe(
        firstname,
        lastname,
        phoneNumber,
        emailaddress,
        password,
      );
      const user = response.data;
      console.log('user from reg screen:', user);
      setLoading(false);
      if (response.status === 201) {
        setLoading(false);
        navigation.navigate(
          RouteNames.authRoutes.termScreen,
          (params = {isReadOnly: false, user}),
        );
      } else if (response.status == 400) {
        setLoading(false);
        Alert.alert('Email already exists, please enter a valid email.');
      } else {
        setLoading(false);
        Alert.alert('Registration failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        setLoading(false);
        Alert.alert(
          'Account Registration failed',
          'Email already exists, please enter a valid email.',
        );
      } else {
        console.error('Error during registering user:', error);
        Alert.alert('Error during registering user', error);
      }
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      // enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={50}>
      <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <View style={styles.viewS1}>
          <Text style={styles.txtS1}>Self</Text>
          <Text style={styles.txtS2}>Check</Text>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <View style={styles.viewS2}>
              <FontAwesome name="user-circle" style={styles.userCS} />
              <Text style={styles.crtAccS}>Create an Account</Text>
              <KeyboardAvoidingView enabled></KeyboardAvoidingView>
              <Input
                ref={firstnameInput}
                onSubmitEditting={() => focusNextInput(lastnameInput)}
                returnKeyType={'next'}
                placeholder={'First Name'}
                placeholderTextColor="white"
                value={firstname}
                // returnKeyType="next"
                onChangeText={text => setFirstname(text)}
              />
              <Input
                placeholder={'Last Name'}
                placeholderTextColor="white"
                value={lastname}
                ref={lastnameInput}
                onSubmitEditting={() => focusNextInput(phoneInput)}
                returnKeyType={'next'}
                onChangeText={text => setLastname(text)}
              />
              <CountryPicker
                show={show}
                // when picker button press you will get the country object with dial code
                pickerButtonOnPress={item => {
                  setCountryCode(item.dial_code);
                  setShow(false);
                }}
              />
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={styles.pickerTo}>
                <View style={styles.txtinpView}>
                  {countryCode ? (
                    <Text style={styles.pickerTxt}>{countryCode}</Text>
                  ) : (
                    <MaterialIcons name="expand-circle-down" style={styles.pickerIcon} />
                  )}
                  <TextInput
                    style={styles.textiS}
                    autoCapitalize="none"
                    placeholder="Phone Number"
                    placeholderTextColor="white"
                    value={phone}
                    returnKeyType="next"
                    onChangeText={text => setPhone(text)}
                  />
                </View>
              </TouchableOpacity>

              {show && (
                <CountryPicker
                  {...{
                    countryCode,
                    withFilter: true,
                    withFlag: true,
                    withCountryNameButton: true,
                    withAlphaFilter: true,
                    onSelect: handleCountrySelect,
                  }}
                />
              )}

              <Input
                autoCapitalize="none"
                placeholder={'Email Address'}
                placeholderTextColor="white"
                keyboardType="email-address"
                value={emailaddress}
                onChangeText={text => setEmailaddress(text)}
                ref={emailInput}
                onSubmitEditting={() => focusNextInput(passwordInput)}
                returnKeyType={'next'}
              />
              <Input
                password
                autoCapitalize={'none'}
                placeholder={'Password'}
                placeholderTextColor="white"
                value={password}
                onChangeText={text => setPassword(text)}
                ref={passwordInput}
                // onSubmitEditting={register}
                returnKeyType={'next'}
              />
              <Button
                style={styles.regToS}
                onPress={register}
                name="Register"
              />
            </View>
          </View>
        </View>
        <Account
          name="Sign In"
          description="Already have an Account?"
          onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}
        />
        <Terms
          name="Terms & Conditions"
          onPress={() =>
            navigation.dispatch(
              StackActions.replace(RouteNames.navigatorNames.authNavigator, {
                screen: RouteNames.authRoutes.termScreen,
                params: {isReadOnly: true},
              }),
            )
          }
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default RegisterScreen;
