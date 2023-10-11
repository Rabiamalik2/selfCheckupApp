//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import {
  useNavigation,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Loader from '../../../components/loader';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import {sendResetPassEmail} from '../../../services/apis/app/userApis';
// create a component
const ForgetPasswordScreen = props => {
  const navigation = useNavigation();
  const [emailaddress, setEmailaddress] = useState('');
  const [loading, setLoading] = React.useState(false);
  const sendEmailForReset = async () => {
    try {
      setLoading(true);
      await sendResetPassEmail(emailaddress);
      setLoading(false);
      navigation.dispatch(
        StackActions.replace(RouteNames.navigatorNames.authNavigator, {
          screen: RouteNames.authRoutes.codeScreen,
          params: {emailaddress},
        }),
      );
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        await Keychain.resetGenericPassword();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: RouteNames.navigatorNames.authNavigator,
                params: {screen: RouteNames.authRoutes.loginScreen},
              },
            ],
          }),
        );
      } else {
        console.error('Network error:', error);
        Alert.alert('Error', error);
      }
    }
  };
  return (
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
            <Text style={styles.fpTxt}>Forgot Password</Text>
            <Text style={styles.item}>
              Enter the email address associated with your account below. We
              will send you a password reset link
            </Text>
            <Input
              autoCapitalize="none"
              placeholder={'Email Address'}
              placeholderTextColor="white"
              keyboardType="email-address"
              value={emailaddress}
              onChangeText={text => setEmailaddress(text)}
            />
            <Button
              onPress={sendEmailForReset}
              style={styles.toSignin}
              name="RESET PASSWORD"
            />
            <Text style={styles.item}>
              You will receive a code on your email if your account exists on
              the app. You will be able to reset your password after successful
              authorization.
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
export default ForgetPasswordScreen;
