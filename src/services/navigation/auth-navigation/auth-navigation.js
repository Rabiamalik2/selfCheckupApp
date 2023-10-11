import React from 'react';
import {HeaderBackButton} from '@react-navigation/elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRoutes} from '../../../screens';
import RouteNames from '../../constants/route-names';
const {authRoutes} = RouteNames;
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
};
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name={authRoutes.welcomeScreen}
        component={AuthRoutes.WelcomeScreen}
      />
      <Stack.Screen
        name={authRoutes.loginScreen}
        component={AuthRoutes.LoginScreen}
      />
      <Stack.Screen
        name={authRoutes.registerScreen}
        component={AuthRoutes.RegisterScreen}
      />
      <Stack.Screen
        name={authRoutes.termScreen}
        component={AuthRoutes.TermsScreen}
      />
      <Stack.Screen
        name={authRoutes.changePasswordScreen}
        component={AuthRoutes.ChangePasswordScreen}
      />
      <Stack.Screen
        name={authRoutes.codeScreen}
        component={AuthRoutes.CodeScreen}
      />
      <Stack.Screen
        name={authRoutes.signupCompleteScreen}
        component={AuthRoutes.SignupCompleteScreen}
      />
      <Stack.Screen
        name={authRoutes.forgetPasswordScreen}
        component={AuthRoutes.ForgetPasswordScreen}
      />
      <Stack.Screen
        name={authRoutes.choosePicScreen}
        component={AuthRoutes.ChoosePicScreen}
      />
      <Stack.Screen
        name={authRoutes.signinWithPhoneScreen}
        component={AuthRoutes.SiginInWithPhoneScreen}
      />
      <Stack.Screen
        name={authRoutes.otpPhoneScreen}
        component={AuthRoutes.OtpPhoneScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
