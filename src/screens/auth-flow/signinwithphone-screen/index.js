import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import auth, {firebase} from '@react-native-firebase/auth';
// create a component
const SiginInWithPhoneScreen = props => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(null);
  // const recaptchaVerifier = useRef(null);
  const sendVerification = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      setConfirm(confirmation); // Save this confirmation object for later.
      navigation.dispatch(
        StackActions.replace(RouteNames.navigatorNames.authNavigator, {
          screen: RouteNames.authRoutes.otpPhoneScreen,
        }),
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
              autoCapitalize={'none'}
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
        description="Wanna go back to signin page?"
        onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default SiginInWithPhoneScreen;
