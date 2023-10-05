//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import PasswordInput from '../../../components/text-input-component/passwordInput';
import Button from '../../../components/button-component/button';
import Account from '../../../components/text-input-component/haveAccount';
import auth, {firebase} from '@react-native-firebase/auth';
// create a component
const SiginInWithPhoneScreen = props => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(null);
  const [confirm, setConfirm] = useState(null);
  // const recaptchaVerifier = useRef(null);
  const sendVerification = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation); // Save this confirmation object for later.
      navigation.dispatch(
        StackActions.replace('authNavigator', {screen: 'otpPhoneScreen'}),
      );
      // Navigate to the OTP verification screen.
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewS1}>
        <Text style={styles.txtS1}>Self</Text>
        <Text style={styles.txtS2}>Check</Text>
      </View>
      <View style={styles.parentView}>
        <View style={styles.childView}>
          <View style={styles.viewS2}>
            <View style={styles.backArrowView}>
              <Ionicons name="arrow-back-outline" style={styles.backArrow} />
            </View>
            <Text style={styles.fpTxt}>Sign In With Your Phone Number</Text>
            <Text style={styles.item}>Please Enter Your Phone Number</Text>
            <Input
              placeholder={'Phone Number'}
              placeholderTextColor="white"
              value={phone}
              returnKeyType="next"
              onChangeText={text => setPhone(text)}
            />
            <Button
              onPress={sendVerification}
              style={styles.toSignin}
              name="Verify Number"
            />
            <Text style={styles.item}>
              You will receive a code on your mobile if your number is correct.
            </Text>
          </View>
        </View>
      </View>
      <Account
        name="Sign In"
        description=" Remembered your password?"
        onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default SiginInWithPhoneScreen;
