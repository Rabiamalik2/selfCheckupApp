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
import {Picker} from '@react-native-picker/picker';
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
import {getMedicoreInfo} from '../../../services/apis/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteNames from '../../../services/constants/route-names';
import {useSelector} from 'react-redux';
// create a component

const MedicoreInfoScreen = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  const [loading, setLoading] = React.useState(false);
  const [mediQues, setMediQues] = useState('');
  const [mediID, setMediID] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const [insuranceId, setInsuranceId] = useState('');
  const medicoreInfo = async () => {
    try {
      setLoading(true);
      const response = await getMedicoreInfo(
        userData.user._id,
        mediQues,
        mediID,
        insuranceName,
        insuranceId,
        userData.user,
      );
      if (response.status === 200) {
        navigation.dispatch(
          StackActions.replace('appNavigator', {
            screen: 'doctorInfoScreen',
          }),
        );
        setLoading(false)
      } else {
        setLoading(false)
        console.error('Error:', response.data);
        Alert.alert('Medicore info could not be added. Please try again.');
      }
    } catch (error) {
      setLoading(false)
      console.error('Error during adding info:', error);
      Alert.alert('Error during adding info');
    }
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1}}
      enableOnAndroid={true}
      scrollEnabled={false} 
      extraScrollHeight={100}
      >
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
            <Text style={styles.mainTxt}>Medicore Info</Text>
            <View style={{marginTop: 40}}>
              <View style={styles.pickerView}>
                <Picker
                  selectedValue={mediQues}
                  onValueChange={itemValue => setMediQues(itemValue)}
                  style={styles.picker}>
                  <Picker.Item
                    label="Yes"
                    style={styles.pickerItem}
                    value="yes"></Picker.Item>
                  <Picker.Item
                    style={styles.pickerItem}
                    label="No"
                    value="no"></Picker.Item>
                </Picker>
              </View>
              <Input
                placeholder={'Enter the medicare or mediCaid ID'}
                placeholderTextColor="white"
                value={mediID}
                returnKeyType="next"
                onChangeText={text => setMediID(text)}
                //MaterialIcons name="arrow-drop-down" style={styles.icon1}
              />
              <Input
                placeholder={'Name of your Medical Insurance'}
                placeholderTextColor="white"
                value={insuranceName}
                returnKeyType="next"
                onChangeText={text => setInsuranceName(text)}
              />
              <Input
                placeholder={'Medical Insurance Id Number'}
                placeholderTextColor="white"
                value={insuranceId}
                returnKeyType="next"
                onChangeText={text => setInsuranceId(text)}
              />
            </View>
            <Button onPress={medicoreInfo} style={styles.toNext} name="Next" />
          </View>
        </View>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default MedicoreInfoScreen;
