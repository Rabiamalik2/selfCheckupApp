//import libraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  Pressable,
  Platform,
} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Loader from '../../../components/loader';
import {
  useNavigation,
  useRoute,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import {getPersonalInfo} from '../../../services/apis/app/userApis';
import RouteNames from '../../../services/constants/route-names';
import {useSelector} from 'react-redux';
// create a component

const PersonalInfoScreen = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  // console.log('per:', user);
  const [loading, setLoading] = React.useState(false);
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date('24-04-1991'));
  const [gender, setGender] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS == 'android') {
        toggleDatePicker();
        setDob(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };
  const personalInfo = async () => {
    try {
      setLoading(true);
      const response = await getPersonalInfo(
        userData.user._id,
        dob,
        gender,
        homeAddress,
      );
      setLoading(false);
      if (response.status === 200) {
        setLoading(false);
        //  console.log("user's personal Info", response)
        navigation.dispatch(
          StackActions.replace(RouteNames.navigatorNames.appNavigator, {
            screen: RouteNames.appRoutes.medicoreInfoScreen,
          }),
        );
        setLoading(false);
      } else {
        setLoading(false);
        console.error('Error:', response.data);
        Alert.alert("user's info could not be added. Please try again.");
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
        console.error('Error during adding info:', error);
        Alert.alert('Error during adding info', error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        // enableOnAndroid={true}
        keyboardShouldPersistTaps="handled">
        <Loader visible={loading} />
        <View style={styles.scView}>
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>

        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={styles.viewS2}>
              <View style={styles.iconView}>
                <MaterialIcons name="person" style={styles.icon} />
              </View>
              <Text style={styles.mainTxt}>Personal Info</Text>
              <View style={{marginTop: 40}}>
                <View>
                  {!showDatePicker && (
                    <Pressable onPress={toggleDatePicker}>
                      <Input
                        placeholder={'Date Of Birth [Dob]'}
                        placeholderTextColor="white"
                        value={dob}
                        returnKeyType="next"
                        onChangeText={text => setDob(text)}
                        editable={false}
                      />
                    </Pressable>
                  )}
                  {showDatePicker && (
                    <DatePicker
                      display="spinner"
                      value={date}
                      mode="date"
                      onChange={onChange}
                    />
                  )}
                </View>
                <View style={styles.pickerView}>
                  <Picker
                    selectedValue={gender}
                    dropdownIconColor={"white"}
                    onValueChange={itemValue => setGender(itemValue)}
                    style={styles.picker}>
                    <Picker.Item
                      label="Gender"
                      style={styles.pickerItem}
                      enabled={false}
                      value="Gender"></Picker.Item>
                    <Picker.Item
                      label="Male"
                      style={styles.pickerItem}
                      value="male"></Picker.Item>
                    <Picker.Item
                      label="Female"
                      style={styles.pickerItem}
                      value="female"></Picker.Item>
                  </Picker>
                </View>
                <Input
                  keyboardType="default"
                  placeholder={'Home Address'}
                  placeholderTextColor="white"
                  value={homeAddress}
                  returnKeyType="next"
                  onChangeText={text => setHomeAddress(text)}
                />
              </View>
              <Button
                onPress={personalInfo}
                style={styles.toNext}
                name="Next"
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default PersonalInfoScreen;
