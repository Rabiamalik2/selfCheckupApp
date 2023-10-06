//import liraries
import React, {Component, useState, createRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import {Divider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../../services/constants/images';
import RouteNames from '../../../services/constants/route-names';
import styles from './styles';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/button';
import NoAccount from '../../../components/text-input-component/noAccount';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/loader';
import auth from '@react-native-firebase/auth';
import * as Keychain from 'react-native-keychain';
import {loginToMyProfile, fetchUserData} from '../../../services/apis/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {
  Dimensions,
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import { setUser } from '../../../services/redux/reducers/user-reducer';
import axios from 'axios';

GoogleSignin.configure({
  webClientId:
    '416536186096-94n53m91gd4vdi536fn6lea7qfi9tmqb.apps.googleusercontent.com',
});
// create a component
const LoginScreen = props => {
  const navigation = useNavigation();
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const login = async () => {
    try {
      setLoading(true);
      const response = await loginToMyProfile(emailaddress, password);
      // console.log('From login Page: ', response.data);
      const token = response.data.token;
      // console.log(token,"token")
      await Keychain.setGenericPassword(emailaddress, token);
      if (response.status === 200) {
        const user = response.data.user;
        console.log('From login Page user: ', user);
        const step = user.step;
        // await fetchUserData(user._id);
        dispatch(setUser(response.data.user));
        if (step === 1) {
          navigation.dispatch(
            StackActions.replace('sosNavigator', {
              screen: 'addContactScreen',
              params: {user},
            }),           
          );
          setLoading(false);
        } else {
          navigation.dispatch(
            StackActions.replace('appNavigator', {
              screen: 'dashboardScreen',
              params: {user},
            }),
          );
          setLoading(false);
        }
      } else {
        console.error('Credentials not matching:', error);
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error during login');
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
              <View style={styles.backArrowView}>
                <Ionicons name="arrow-back-outline" style={styles.backArrow} />
              </View>
              <Text style={styles.wbS}>Welcome Back!</Text>
              <Text style={styles.wbS1}>
                Welcome back to the Self Health Check App! {'\n'}Please login to
                your account and continue{'\n'}your health journey.
              </Text>
              <View style={{marginTop: 30}}>
                <Input
                  autoCapitalize="none"
                  placeholder={'Email Address'}
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  value={emailaddress}
                  onChangeText={text => setEmailaddress(text)}
                />
                <Input
                  password
                  placeholder={'Password'}
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <View style={styles.fpassView}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.replace('authNavigator', {
                          screen: 'forgetPasswordScreen',
                        }),
                      )
                    }
                    // navigate(RouteNames.appRoutes.forgetPasswordScreen)}
                    style={styles.fpassToStle}>
                    <Text style={styles.txtFpass}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={login}
                  style={styles.toSignin}
                  name="Sign In"
                />
                <View style={styles.horizontalLine} />
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    marginTop: 20,
                    marginBottom: 2,
                  }}>
                  Or sign in with
                </Text>
                <View style={styles.googleAndPhoneStyle}>
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={() =>
                      onGoogleButtonPress().then(() =>
                        navigation.dispatch(
                          StackActions.replace('appNavigator', {
                            screen: 'dashboardScreen',
                          }),
                        ),
                      )
                    }>
                    <Image
                      source={Images.google}
                      style={{
                        height: responsiveHeight(2),
                        width: responsiveWidth(4),
                      }}
                    />
                    <Text style={styles.googleTxt}>Google</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalLine} />
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.replace('authNavigator', {
                          screen: 'signinWithPhoneScreen',
                        }),
                      )
                    }>
                    <Image
                      source={Images.phone}
                      style={{
                        height: responsiveHeight(2),
                        width: responsiveWidth(4),
                      }}
                    />
                    <Text style={styles.googleTxt}>Phone Number</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <NoAccount
          name="Register"
          description="Dont have an Account?"
          onPress={() =>
            navigation.navigate(RouteNames.authRoutes.registerScreen)
          }
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default LoginScreen;
