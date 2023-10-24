//import liraries
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../../services/constants/images';
import RouteNames from '../../../services/constants/route-names';
import styles from './styles';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import NoAccount from '../../../components/text-input-component/noAccount';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../../../components/loader';
import auth from '@react-native-firebase/auth';
import * as Keychain from 'react-native-keychain';
// import com.facebook.FacebookSdk;
import {
  loginToMyProfile,
  loginwithGoogle,
  loginwithFb,
} from '../../../services/apis/auth/index.js';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {sha256} from 'react-native-sha256';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../services/redux/reducers/user-reducer';
// create a component
const LoginScreen = props => {
  state = {
    login: false,
  };

  const navigation = useNavigation();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const focusNextInput = nextInputRef => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const [emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = React.useState(false);
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(userInfo);
      // console.log('Google Sign-In successful', googleCredential);
      setLoading(true);
      const response = await loginwithGoogle(userInfo);
      console.log(response.data.token, 'gogle');
      const token = response.data.token;
      console.log('1', token);
      await Keychain.setGenericPassword(userInfo.user.email, token);
      if (response.status === 200 || response.status === 201) {
        console.log('mydata', response.data);
        const user = response.data.user;
        console.log('From Google login Page user: ', user);
        const step = user.step;
        dispatch(setUser(response.data.user));
        if (step === 1) {
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 2, // The index is the number of screens to reset.
              routes: [
                {
                  name: RouteNames.navigatorNames.appNavigator,
                  params: {screen: RouteNames.appRoutes.dashboardScreen},
                },
                {
                  name: RouteNames.navigatorNames.sosNavigator,
                  state: {
                    routes: [
                      {
                        name: RouteNames.sosNavRoutes.emergencyContactScreen,
                      },
                      {
                        name: RouteNames.sosNavRoutes.addContactScreen,
                        params: {user},
                      },
                    ],
                  },
                },
              ],
            }),
          );
        } else {
          setLoading(false);
          navigation.dispatch(
            StackActions.replace(RouteNames.navigatorNames.appNavigator, {
              screen: RouteNames.appRoutes.dashboardScreen,
              params: {user},
            }),
          );
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Handle Google Sign-In error
        console.error('Google Sign-In cancelled:', error);
        Alert.alert(
          'Google Sign-In Error',
          'An error occurred during Google Sign-In.',
        );
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Handle Google Sign-In error
        console.error('PLAY_SERVICES_NOT_AVAILABLE:', error);
        Alert.alert(
          'Google Sign-In Error',
          'An error occurred during Google Sign-In.',
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Handle Google Sign-In error
        console.error('IN_PROGRESS:', error);
        Alert.alert(
          'Google Sign-In Error',
          'An error occurred during Google Sign-In.',
        );
      } else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // Handle Google Sign-In error
        console.error('SIGN_IN_REQUIRED', error);
        Alert.alert(
          'Google Sign-In Error',
          'An error occurred during Google Sign-In.',
        );
      } else if (error.response && error.response.status === 401) {
        console.error('Error during login:', error);
        Alert.alert(
          'Invalid credentials',
          'Credentials do not match. Please try again.',
        );
      } else if (error.response && error.response.status === 400) {
        console.error('Error during login:', error);
        Alert.alert('Invalid credentials', 'Please enter email & password');
      } else if (error.response && error.response.status === 404) {
        console.error('Error during login:', error);
        Alert.alert('Invalid credentials', 'User not found');
      } else {
        console.error('Error during login:', error);
        Alert.alert(
          'Error',
          'An error occurred while logging in. Please try again.',
        );
      }
    }
  };

  const login = async () => {
    try {
      setLoading(true);
      const response = await loginToMyProfile(emailaddress, password);
      setLoading(false);
      // console.log(response.status)
      const token = response.data.token;
      await Keychain.setGenericPassword(emailaddress, token);
      if (response.status === 200) {
        const user = response.data.user;
        console.log('From login Page user: ', user);
        const step = user.step;
        dispatch(setUser(response.data.user));
        if (step === 1) {
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 2, // The index is the number of screens to reset.
              routes: [
                {
                  name: RouteNames.navigatorNames.appNavigator,
                  params: {screen: RouteNames.appRoutes.dashboardScreen},
                },
                {
                  name: RouteNames.navigatorNames.sosNavigator,
                  state: {
                    routes: [
                      {
                        name: RouteNames.sosNavRoutes.emergencyContactScreen,
                      },
                      {
                        name: RouteNames.sosNavRoutes.addContactScreen,
                        params: {user},
                      },
                    ],
                  },
                },
              ],
            }),
          );
        } else {
          setLoading(false);
          navigation.dispatch(
            StackActions.replace(RouteNames.navigatorNames.appNavigator, {
              screen: RouteNames.appRoutes.dashboardScreen,
              params: {user},
            }),
          );
        }
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        console.error('Error during login:', error);
        Alert.alert(
          'Invalid credentials',
          'Credentials does not match. Please try again.',
        );
      } else if (error.response && error.response.status === 400) {
        console.error('Error during login:', error);
        Alert.alert('Invalid credentials', 'Please enter email & password');
      } else if (error.response && error.response.status === 404) {
        console.error('Error during login:', error);
        Alert.alert('Invalid credentials', 'User not found');
      } else {
        console.error('Error during login:', error);
        Alert.alert(
          'Error',
          'An error occurred while logging in. Please try again.',
        );
      }
    }
  };

  const onFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        console.error('User cancelled the login process:');
        Alert.alert('Error', 'User cancelled the login process');
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        console.error('Something went wrong obtaining access token');
        Alert.alert('Error', 'Something went wrong obtaining access token');
      }
      // const facebookCredential = auth.FacebookAuthProvider.credential(
      //   data.accessToken,
      // );
      // return auth().signInWithCredential(facebookCredential);
      // console.log('1,', facebookCredential);
      console.log('at,', data.accessToken);
      setLoading(true);
      const response = await loginwithFb(data.accessToken);
      console.log(response.data.token, response.data.user.email, 'fb');
      const token = response.data.token;
      const email = response.data.user.email;
      console.log('1', token);
      await Keychain.setGenericPassword(email, token);
      if (response.status === 200 || response.status === 201) {
        console.log('mydata', response.data);
        const user = response.data.user;
        console.log('From Google login Page user: ', user);
        const step = user.step;
        dispatch(setUser(user));
        if (step === 1) {
          setLoading(false);
          navigation.dispatch(
            CommonActions.reset({ 
              index: 2, // The index is the number of screens to reset.
              routes: [
                {
                  name: RouteNames.navigatorNames.appNavigator,
                  params: {screen: RouteNames.appRoutes.dashboardScreen},
                },
                {
                  name: RouteNames.navigatorNames.sosNavigator,
                  state: {
                    routes: [
                      {
                        name: RouteNames.sosNavRoutes.emergencyContactScreen,
                      },
                      {
                        name: RouteNames.sosNavRoutes.addContactScreen,
                        params: {user},
                      },
                    ],
                  },
                },
              ],
            }),
          );
        } else {
          setLoading(false);
          navigation.dispatch(
            StackActions.replace(RouteNames.navigatorNames.appNavigator, {
              screen: RouteNames.appRoutes.dashboardScreen,
              params: {user},
            }),
          );
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
      Alert.alert(
        'Error',
        'An error occurred while logging in. Please try again.',
      );
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '416536186096-94n53m91gd4vdi536fn6lea7qfi9tmqb.apps.googleusercontent.com',
    });
  }, []);
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
              <View style={styles.backArrowView}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(RouteNames.authRoutes.welcomeScreen)
                  }>
                  <Ionicons
                    name="arrow-back-outline"
                    style={styles.backArrow}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.wbS}>Welcome Back!</Text>
              <Text style={styles.wbS1}>
                Welcome back to the Self Health Check App! {'\n'}Please login to
                your account and continue{'\n'}your health journey.
              </Text>
              <View style={{marginTop: 30}}>
                <Input
                  ref={emailInput}
                  onSubmitEditting={() => focusNextInput(passwordInput)}
                  returnKeyType={'next'}
                  autoCapitalize="none"
                  placeholder={'Email Address'}
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  value={emailaddress}
                  onChangeText={text => setEmailaddress(text)}
                />
                <Input
                  ref={passwordInput}
                  password
                  autoCapitalize="none"
                  placeholder={'Password'}
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <View style={styles.fpassView}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 1, // The index is the number of screens to reset.
                          routes: [
                            {
                              name: RouteNames.navigatorNames.authNavigator,
                              params: {
                                screen: RouteNames.authRoutes.loginScreen,
                              },
                            },
                            {
                              name: RouteNames.navigatorNames.authNavigator,
                              state: {
                                routes: [
                                  {
                                    name: RouteNames.authRoutes
                                      .forgetPasswordScreen,
                                  },
                                ],
                              },
                            },
                          ],
                        }),
                      )
                    }
                    style={styles.fpassToStle}>
                    <Text style={styles.txtFpass}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={login}
                  style={styles.toSignin}
                  name="Sign In"
                />

                <Text style={styles.signinTxt}>Or sign in with</Text>
                <View style={styles.horizontalLine} />
                <View style={styles.googleAndPhoneStyle}>
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={onGoogleButtonPress}>
                    <Image source={Images.google} style={styles.googleImg} />
                    <Text style={styles.googleTxt}>Google</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalLine} />
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={() =>
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 1, // The index is the number of screens to reset.
                          routes: [
                            {
                              name: RouteNames.navigatorNames.authNavigator,
                              params: {
                                screen: RouteNames.authRoutes.loginScreen,
                              },
                            },
                            {
                              name: RouteNames.navigatorNames.authNavigator,
                              state: {
                                routes: [
                                  {
                                    name: RouteNames.authRoutes
                                      .signinWithPhoneScreen,
                                  },
                                ],
                              },
                            },
                          ],
                        }),
                      )
                    }>
                    <Image source={Images.phone} style={styles.phoneImg} />
                    <Text style={styles.googleTxt}>Phone Number</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalLine} />
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={onFacebookButtonPress}>
                    <Image source={Images.phone} style={styles.phoneImg} />
                    <Text style={styles.googleTxt}>Facebook</Text>
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
