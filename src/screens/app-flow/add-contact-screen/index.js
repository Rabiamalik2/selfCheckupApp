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
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Input from '../../../components/text-input-component/textInput';
import Loader from '../../../components/loader';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import {addContacts, updateContact} from '../../../services/apis/auth';
import RouteNames from '../../../services/constants/route-names';
import {useSelector} from 'react-redux';
// create a component

const AddContactScreen = props => {
  const navigation = useNavigation();
  const Route = useRoute();
  const contactId = Route.params?.itemId;
  
  const userData = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const addContact = async userID => {
    try {
      if (userData.user.step == 1) {
        setLoading(true);
        const response = await addContacts(
          userData.user._id,
          firstname,
          lastname,
          phone,
          relation,
          userData.user,
        );
        setLoading(false);
        if (response.status === 201) {
          setLoading(false);
          navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
          setLoading(false);
        } else {
          setLoading(false);
          console.error('Error:', response.data);
          Alert.alert('Contact could not be added. Please try again.');
        }
      } else if (userData.user.step == 2) {
       
        if (contactId != null) {
          console.log('contactId : ', contactId);
          setLoading(true);
          const response = await updateContact(
            contactId,
            firstname,
            lastname,
            phone,
            relation,
          );
          setLoading(false);
          if (response.status === 201) {
            setLoading(false);
            navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
          } else {
            setLoading(false);
            console.error('Error:', response.data);
            Alert.alert('Contact could not be udated. Please try again.');
          }
        } else {
          setLoading(true);
          const response = await addContacts(
            userData.user._id,
            firstname,
            lastname,
            phone,
            relation,
            userData.user,
          );
          setLoading(false);
          if (response.status === 201) {
            setLoading(false);
            navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
            setLoading(false);
          } else {
            setLoading(false);
            console.error('Error:', response.data);
            Alert.alert('Contact could not be added. Please try again.');
          }
        }
      }
    } catch (error) {
      setLoading(false);
      console.error('Network error:', error);
      Alert.alert('Error during updating contact');
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{flex: 1}}
      enableOnAndroid={true}
      scrollEnabled={false}
      extraScrollHeight={150}>
      <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <View style={styles.scView}>
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
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}> Add Contact</Text>
        </View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={styles.viewS2}>
              <Text style={styles.mainTxt}>
                It’s important to add the emergency contact {'\n'}
                information so please make sure to fill all the {'\n'} necessary
                details.
              </Text>
              <Input
                placeholder={'First Name'}
                placeholderTextColor="white"
                value={firstname}
                returnKeyType="next"
                onChangeText={text => setFirstname(text)}
              />
              <Input
                placeholder={'Last Name'}
                placeholderTextColor="white"
                value={lastname}
                returnKeyType="next"
                onChangeText={text => setLastname(text)}
              />
              <Input
                placeholder={'Phone'}
                placeholderTextColor="white"
                value={phone}
                returnKeyType="next"
                onChangeText={text => setPhone(text)}
              />
              <Input
                autoCapitalize="none"
                placeholder={'Relation'}
                placeholderTextColor="white"
                value={relation}
                onChangeText={text => setRelation(text)}
                returnKeyType="next"
              />
              <View style={styles.btnView}>
                <TouchableOpacity style={styles.saveToS} onPress={addContact}>
                  <Text style={styles.saveBtnS}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default AddContactScreen;
