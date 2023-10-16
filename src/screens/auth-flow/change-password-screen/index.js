//import liraries
import React, {Component, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation, StackActions, useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Loader from '../../../components/loader';
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
  const [loading, setLoading] = React.useState(false);
  const [pass, setpass] = useState('');
  const [password, setPassword] = useState('');
  console.log('Fp Screen', email);
  const updatePassword = async () => {
    try {
      if (pass == password) {
        setLoading(true);
        const response = await updatePasswordApiCall(email, password);
        setLoading(false);
        if (response.status == 201) {
          setLoading(false);
          Alert.alert('Update Password', 'Your Password has been updated');
          navigation.dispatch(
            StackActions.replace(RouteNames.navigatorNames.authNavigator, {
              screen: RouteNames.authRoutes.loginScreen,
              params: {email},
            }),
          );
        } else {
          setLoading(false);
          Alert.alert('Update Password', 'Your Password could not be updated');
        }
      }
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
        Alert.alert('Error during updating password', error);
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
        <Loader visible={loading} />
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
                  autoCapitalize="none"
                  placeholder={'Enter Password'}
                  placeholderTextColor="white"
                  value={pass}
                  onChangeText={text => setpass(text)}
                />
                <Input
                  password
                  autoCapitalize="none"
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
