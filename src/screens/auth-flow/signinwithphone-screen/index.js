import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import RouteNames from '../../../services/constants/route-names';
import Loader from '../../../components/loader';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import auth, {firebase} from '@react-native-firebase/auth';
import {CountryPicker} from 'react-native-country-codes-picker';
// create a component
const SiginInWithPhoneScreen = props => {
  const onAuthStateChanged = user => {
    if (user) {
      setAuthenticated(true);
      console.log('User is signed in:', user.uid);
    } else {
      setAuthenticated(false);
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // useEffect(() => {
  //   auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setAuthenticated(true);
  //       console.log('User is signed in:', user.uid);
  //
  //     } else {
  //       setAuthenticated(false);
  //     }
  //   });
  // }, []);

  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(null);
  // const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [loading, setLoading] = React.useState(false);
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleCountrySelect = country => {
    setCountryCode(country.cca2);
    setShow(false); // Close the country picker modal
  };
  const sendVerificationCode = async phoneNumber => {
    try {
      phoneNumber = `${countryCode}${phone}`;
      console.log(phoneNumber);
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setIsCodeSent(true);
      setLoading(false);
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };
  const verifyCode = async () => {
    try {
      setLoading(true);
      await confirm.confirm(value);
      setAuthenticated(true);
      console.log('Phone number verified successfully!');
      setValue('');
      setLoading(false);
      navigation.dispatch(
        StackActions.replace(RouteNames.navigatorNames.appNavigator, {
          screen: RouteNames.appRoutes.dashboardScreen,
        }),
      );
    } catch (error) {
      console.error('Error confirming verification code:', error);
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

            {isCodeSent ? (
              <View>
                <Text style={styles.fpTxt}>Enter Code</Text>
                <Text style={styles.item}>
                  Please enter the verification code that was sent to your phone
                  Number.
                </Text>
                <CodeField
                  ref={ref}
                  {...propss}
                  // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />

                <Button
                  onPress={verifyCode}
                  style={styles.toSignin}
                  name="Sign In"
                />
              </View>
            ) : (
              <View>
                <Text style={styles.fpTxt}>Sign In With Your Phone Number</Text>
                <Text style={styles.item}>Please Enter Your Phone Number</Text>
                <CountryPicker
                  show={show}
                  // when picker button press you will get the country object with dial code
                  pickerButtonOnPress={item => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={styles.pickerTo}>
                  <View style={styles.txtinpView}>
                    {countryCode ? (
                      <Text style={styles.pickerTxt}>{countryCode}</Text>
                    ) : (
                      <MaterialIcons
                        name="expand-circle-down"
                        style={styles.pickerIcon}
                      />
                    )}
                    <TextInput
                      style={styles.textiS}
                      autoCapitalize="none"
                      placeholder="Phone Number"
                      placeholderTextColor="white"
                      value={phone}
                      returnKeyType="next"
                      // keyboardType="number"
                      onChangeText={text => setPhone(text)}
                    />
                  </View>
                </TouchableOpacity>

                {show && (
                  <CountryPicker
                    {...{
                      countryCode,
                      withFilter: true,
                      withFlag: true,
                      withCountryNameButton: true,
                      withAlphaFilter: true,
                      onSelect: handleCountrySelect,
                    }}
                  />
                )}

                <Button
                  onPress={sendVerificationCode}
                  style={styles.toSignin}
                  name="Verify Number"
                />
              </View>
            )}
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

//*************************************/
