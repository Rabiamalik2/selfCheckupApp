//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  Component,
  useEffect,
  FC,
  ReactElement,
  useState,
  createRef,
} from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
  ScrollView,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import Loader from '../../../components/loader';
import Terms from '../../../components/text-input-component/termsConditions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import {registerMe} from '../../../services/apis/auth';
import styles from './styles';
// create a component
const RegisterScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const register = async () => {
    try {
      setLoading(true);
      const response = await registerMe(
        firstname,
        lastname,
        phone,
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
      } else {
        setLoading(false);
        Alert.alert('Registration failed. Please try again.');
      }
    } catch (error) {
      setLoading(false)
      console.error('Error during registering user:', error);
      Alert.alert('Error during registering user');
    }
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
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
                placeholder={'First Name'}
                placeholderTextColor="white"
                value={firstname}
                returnKeyType="next"
                onChangeText={text => setFirstname(text)}
              />
              <Input
                placeholder={'Last Name'}
                placeholderTextColor="white"
                value={lastname}
                returnKeyType="next"
                onChangeText={text => setLastname(text)}
              />
              <Input
                placeholder={'Phone'}
                placeholderTextColor="white"
                value={phone}
                returnKeyType="next"
                onChangeText={text => setPhone(text)}
              />
              <Input
                autoCapitalize="none"
                placeholder={'Email Address'}
                placeholderTextColor="white"
                keyboardType="email-address"
                value={emailaddress}
                onChangeText={text => setEmailaddress(text)}
                returnKeyType="next"
              />
              <Input
                password
                placeholder={'Password'}
                placeholderTextColor="white"
                value={password}
                onChangeText={text => setPassword(text)}
                returnKeyType="next"
              />
              <Button
                style={styles.regToS}
                onPress={register}
                name="Register"
              />
              <Button
                style={styles.fbToS}
                onPress={() =>
                  navigation.navigate(RouteNames.authRoutes.registerScreen)
                }
                name="SIGN UP WITH facebook"
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
              StackActions.replace('authNavigator', {
                screen: 'termScreen',
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
