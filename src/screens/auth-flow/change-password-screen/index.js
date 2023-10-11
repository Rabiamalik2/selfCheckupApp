//import liraries
import React, {Component, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation, StackActions, useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import NoAccount from '../../../components/text-input-component/noAccount';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteNames from '../../../services/constants/route-names';
import {updatePasswordApiCall} from '../../../services/apis/app/userApis';
// create a component
const ChangePasswordScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params?.email;
  const [pass, setpass] = useState('');
  const [password, setPassword] = useState('');
  console.log('Fp Screen', email);
  const updatePassword = async () => {
    if (pass == password) {
      const response = await updatePasswordApiCall(email, password);
      if (response.status == 201) {
        Alert.alert('Update Password', 'Your Password has been updated');
        navigation.dispatch(
          StackActions.replace(RouteNames.navigatorNames.authNavigator, {
            screen: RouteNames.authRoutes.loginScreen,
            params: {email},
          }),
        );
      } else {
        Alert.alert('Update Password', 'Your Password could not be updated');
      }
    }
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewS1}>
          <Text style={styles.txtS1}>Self</Text>
          <Text style={styles.txtS2}>Check</Text>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <View style={styles.viewS2}>
              <View style={styles.lockView}>
                <MaterialIcons name="password" style={styles.lock} />
              </View>
              <Text style={styles.fpTxt}>Change Password</Text>
              <Text style={styles.item}>
                Welcome back to the Self Health Check App! Please login to your
                account and continue your health journey.
              </Text>
              <View>
                <Input
                  password
                  placeholder={'Enter Password'}
                  placeholderTextColor="white"
                  value={pass}
                  onChangeText={text => setpass(text)}
                />
                <Input
                  password
                  placeholder={'Reconfirm Password'}
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <Button
                  onPress={updatePassword}
                  style={styles.toSignin}
                  name="Update Password"
                />
              </View>
            </View>
          </View>
        </View>
        <NoAccount
          name="Register"
          description="Dont have an Account?"
          onPress={RouteNames.authRoutes.registerScreen}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default ChangePasswordScreen;
