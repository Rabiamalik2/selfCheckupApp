//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
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
import {getDoctorInfo} from '../../../services/apis/app/medicalApis';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../services/redux/reducers/user-reducer';
import {useSelector} from 'react-redux';
// create a component

const DoctorInfoScreen = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
  const [docName, setDocName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const doctorInfo = async () => {
    try {
      setLoading(true);
      const response = await getDoctorInfo(
        userData.user._id,
        docName,
        phoneNumber,
        insuranceName,
        userData.user,
      );
      if (response.status === 200) {
        navigation.dispatch(
          StackActions.replace('appNavigator', {
            screen: 'dashboardScreen',
          }),
        );
        setLoading(false);
      } else {
        setLoading(false);
        console.error('Error:', response.data);
        Alert.alert("Doctor's info could not be added. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during adding info:', error);
      Alert.alert('Error during adding info');
    }
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1}}
      enableOnAndroid={true}
      scrollEnabled={false}
      extraScrollHeight={80}>
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
              <Text style={styles.mainTxt}>Doctor's Info</Text>
              <View style={{marginTop: 30}}></View>
              <Input
                placeholder={'First and Last Name Of Your Primary Doctor'}
                placeholderTextColor="white"
                value={docName}
                returnKeyType="next"
                onChangeText={text => setDocName(text)}
                //MaterialIcons name="arrow-drop-down" style={styles.icon1}
              />
              <Input
                placeholder={'Phone Number Of Your Primary Doctor'}
                placeholderTextColor="white"
                value={phoneNumber}
                returnKeyType="next"
                onChangeText={text => setPhoneNumber(text)}
                //MaterialIcons name="arrow-drop-down" style={styles.icon1}
              />

              <Input
                placeholder={'Name Of Your Medical Insurance'}
                placeholderTextColor="white"
                value={insuranceName}
                returnKeyType="next"
                onChangeText={text => setInsuranceName(text)}
                //MaterialIcons name="arrow-drop-down" style={styles.icon1}
              />
              <Text style={styles.txtStyle}>
                {' '}
                Please provide any missing information that is {'\n'} critical
                during an emergency.
              </Text>
              <Button
                onPress={doctorInfo}
                style={styles.toSub}
                name="Submit Information"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default DoctorInfoScreen;
