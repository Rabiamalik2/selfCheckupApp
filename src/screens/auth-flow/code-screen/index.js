import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation, StackActions, useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Loader from '../../../components/loader';
import Input from '../../../components/text-input-component/textInput';
import RouteNames from '../../../services/constants/route-names';
import {confirmPasscode} from '../../../services/apis/app/userApis';
// create a component
const CodeScreen = props => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [loading, setLoading] = React.useState(false);
  const route = useRoute();
  const email = route.params?.emailaddress;
  console.log('Code Screen', email)
  const resetCodeConfirmation = async () => {
    setLoading(true);
    const response = await confirmPasscode(code);
    setLoading(false);
    if (response.status == 201) {
      setLoading(false);
      navigation.dispatch(
        StackActions.replace(RouteNames.navigatorNames.authNavigator, {
          screen: RouteNames.authRoutes.changePasswordScreen,
          params:{email}
        }),
      );
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
            <View style={styles.lockView}>
              <MaterialIcons name="lock-outline" style={styles.lock} />
            </View>
            <Text style={styles.fpTxt}>Enter Code</Text>
            <Text style={styles.item}>
              Please enter the verification code that was sent to your email
              address.
            </Text>
            <Input
              placeholder={'Enter Code'}
              placeholderTextColor="white"
              value={code}
              returnKeyType="next"
              onChangeText={text => setCode(text)}
            />
            <View style={styles.btnNextView}>
              <TouchableOpacity
                style={styles.nextTo}
                onPress={resetCodeConfirmation}>
                <Text style={styles.txtNextS}>NEXT</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.item}>
              Once entered correctly, you can proceed to reset your password and
              regain access to your account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.viewS6}>
        <Text style={styles.accTxt}>Reset your password</Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default CodeScreen;
