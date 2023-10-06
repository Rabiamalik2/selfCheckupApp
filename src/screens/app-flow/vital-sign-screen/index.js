//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useIsFocused,
} from '@react-navigation/native';
import Loader from '../../../components/loader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getVitalSigns, displayVitalSigns} from '../../../services/apis/app/medicalApis';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component/index.js';
import {useSelector} from 'react-redux';
import styles from './styles';
// create a component
const VitalSignsScreen = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugarLevel, setBloodSugarLevel] = useState('');
  const [pulse, setPulse] = useState('');
  const [bodyTemprature, setBodyTemprature] = useState('');
  const isFocused = useIsFocused();
  const showVitalSigns = async () => {
    try {
      setLoading(true);
      const fetchedData = await displayVitalSigns(userData.user._id);
      setLoading(false);
      console.log('myData: ', fetchedData);
      if (fetchedData.length > 0) {
        setLoading(false);
        setBloodPressure(fetchedData[0].bloodPressure);
        setBloodSugarLevel(fetchedData[0].bloodSugarLevel);
        setPulse(fetchedData[0].pulse);
        setBodyTemprature(fetchedData[0].bodyTemprature);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error getting vitals data:', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      showVitalSigns();
    }
  }, []);

  const storeVitalSigns = async () => {
    try {
      setLoading(true);
      const response = await getVitalSigns(
        userData.user._id,
        bloodPressure,
        bloodSugarLevel,
        pulse,
        bodyTemprature,
      );
      setLoading(false);
      if (response.status === 200) {
        setLoading(false);
        Alert.alert('Vital Signs Have Been Stored Successfully');
      } else {
        setLoading(false);
        console.error('Error:', response.data);
        Alert.alert('Vital Signs could not be added.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during adding Signs:', error);
      Alert.alert('Error during adding Vital Signs');
    }
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={150}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
      <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <View style={styles.viewS1}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <MaterialIcons
              name="west"
              style={{
                left: -60,
                fontSize: responsiveFontSize(4),
                color: '#33295d',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.txtS1}>Self</Text>
          <Text style={styles.txtS2}>Check</Text>
        </View>
        <View style={styles.parentView}>
          <View style={styles.childView}>
            <View style={styles.viewS2}>
              <Text style={styles.crtAccS}>Vital Signs</Text>
              <Text style={{marginTop: 20, color: 'white'}}>
                Please provide the following information:
              </Text>
              <View style={{marginTop: 40}}>
                <Input
                  placeholder={'Blood Sugar Level (mg/dl)'}
                  placeholderTextColor="white"
                  value={bloodPressure}
                  returnKeyType="next"
                  onChangeText={text => setBloodPressure(text)}
                />
                <Input
                  placeholder={'Blood Sugar Level (mg/dl)'}
                  placeholderTextColor="white"
                  value={bloodSugarLevel}
                  returnKeyType="next"
                  onChangeText={text => setBloodSugarLevel(text)}
                />
                <Input
                  placeholder={'Pulse(beats per minute)'}
                  placeholderTextColor="white"
                  value={pulse}
                  returnKeyType="next"
                  onChangeText={text => setPulse(text)}
                />
                <Input
                  placeholder={'Body Temperature: F'}
                  placeholderTextColor="white"
                  value={bodyTemprature}
                  returnKeyType="next"
                  onChangeText={text => setBodyTemprature(text)}
                />
                <Button
                  onPress={storeVitalSigns}
                  style={styles.Save}
                  name="Save"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default VitalSignsScreen;
