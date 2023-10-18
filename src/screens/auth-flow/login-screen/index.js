//import liraries
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
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
import {loginToMyProfile} from '../../../services/apis/auth/index.js';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../services/redux/reducers/user-reducer';
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
            StackActions.replace(RouteNames.navigatorNames.sosNavigator, {
              screen: RouteNames.sosNavRoutes.addContactScreen,
              params: {user},
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
                  autoCapitalize="none"
                  placeholder={'Email Address'}
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  value={emailaddress}
                  onChangeText={text => setEmailaddress(text)}
                />
                <Input
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
                        StackActions.replace(
                          RouteNames.navigatorNames.authNavigator,
                          {
                            screen: RouteNames.authRoutes.forgetPasswordScreen,
                          },
                        ),
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
                <View style={styles.horizontalLine} />
                <Text style={styles.signinTxt}>Or sign in with</Text>
                <View style={styles.googleAndPhoneStyle}>
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={() =>
                      onGoogleButtonPress().then(() =>
                        navigation.dispatch(
                          StackActions.replace(
                            RouteNames.navigatorNames.appNavigator,
                            {
                              screen: RouteNames.appRoutes.dashboardScreen,
                            },
                          ),
                        ),
                      )
                    }>
                    <Image source={Images.google} style={styles.googleImg} />
                    <Text style={styles.googleTxt}>Google</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalLine} />
                  <TouchableOpacity
                    style={styles.googleButtonStyle}
                    onPress={() =>
                      navigation.dispatch(
                        StackActions.replace(
                          RouteNames.navigatorNames.authNavigator,
                          {
                            screen: RouteNames.authRoutes.signinWithPhoneScreen,
                          },
                        ),
                      )
                    }>
                    <Image source={Images.phone} style={styles.phoneImg} />
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
