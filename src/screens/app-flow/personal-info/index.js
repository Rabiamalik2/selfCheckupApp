//import libraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  BackHandler,
} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import Loader from '../../../components/loader';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import {getPersonalInfo} from '../../../services/apis/auth';
import RouteNames from '../../../services/constants/route-names';
import {useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
      if (response.status === 200) {
        //  console.log("user's personal Info", response)
        navigation.dispatch(
          StackActions.replace('appNavigator', {
            screen: 'medicoreInfoScreen',
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
      console.error('Error during adding info:', error);
      Alert.alert('Error during adding info');
    }
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
      <SafeAreaView style={styles.container}>
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
                    onValueChange={itemValue => setGender(itemValue)}
                    style={styles.picker}>
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default PersonalInfoScreen;
