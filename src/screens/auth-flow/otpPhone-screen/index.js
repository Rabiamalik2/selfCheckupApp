import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth, {firebase} from '@react-native-firebase/auth';
import RouteNames from '../../../services/constants/route-names';
// create a component
const OtpPhoneScreen = props => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const confirmCode = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user.uid);
        setCode('');
        navigation.dispatch(
          StackActions.replace(RouteNames.navigatorNames.appNavigator, {
            screen: RouteNames.appRoutes.dashboardScreen,
          }),
        );
      } else {
        // User is signed out
        console.log('User is signed out');
        navigation.dispatch(
          StackActions.replace(RouteNames.navigatorNames.authNavigator, {
            screen: RouteNames.authRoutes.loginScreen,
          }),
        );
      }
    });
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
            <View style={styles.lockView}>
              <MaterialIcons name="lock-outline" style={styles.lock} />
            </View>
            <Text style={styles.fpTxt}>Enter Code</Text>
            <Text style={styles.item}>
              Please enter the verification code that was sent to your phone
              Number.
            </Text>
            <OTPInputView
              style={styles.otpInputView}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <View style={styles.btnNextView}>
              <TouchableOpacity style={styles.nextTo} onPress={confirmCode}>
                <Text style={styles.txtNextS}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default OtpPhoneScreen;
