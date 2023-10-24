//import libraries
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Modal,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component';
import Loader from '../../../components/loader';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import * as Keychain from 'react-native-keychain';
import {
  addContacts,
  updateContact,
} from '../../../services/apis/app/contactApis';
import RouteNames from '../../../services/constants/route-names';
import {useSelector} from 'react-redux';
// create a component

const AddContactScreen = props => {
  const navigation = useNavigation();
  const firstnameInput = useRef(null);
  const lastnameInput = useRef(null);
  const phoneInput = useRef(null);
  const focusNextInput = nextInputRef => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  const Route = useRoute();
  const contactId = Route.params?.itemId;
  const userData = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [relation, setRelation] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const buttonOk = () => {
    setModalVisible(false);
    console.log('going');

    props.navigation.navigate(RouteNames.navigatorNames.sosNavigator, {
      screen: RouteNames.sosNavRoutes.emergencyContactScreen,
    });
  };
  const addContactOnPress = async userID => {
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
          setModalVisible(true);
          // navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
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
            setModalVisible(true);
            // navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
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
            setModalVisible(true);
            // navigation.navigate(RouteNames.sosNavRoutes.emergencyContactScreen);
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
        Alert.alert('Error during updating contact', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={-150}>
        <Loader visible={loading} />
        <View style={styles.scView}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <MaterialIcons name="west" style={styles.westIcon} />
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
                keyboardType="default"
                placeholder={'First Name'}
                placeholderTextColor="white"
                value={firstname}
                ref={firstnameInput}
                onSubmitEditting={() => focusNextInput(lastnameInput)}
                returnKeyType={'next'}
                onChangeText={text => setFirstname(text)}
              />
              <Input
                keyboardType="default"
                placeholder={'Last Name'}
                placeholderTextColor="white"
                value={lastname}
                ref={lastnameInput}
                onSubmitEditting={() => focusNextInput(phoneInput)}
                returnKeyType={'next'}
                onChangeText={text => setLastname(text)}
              />
              <Input
                keyboardType="number-pad"
                placeholder={'Phone'}
                placeholderTextColor="white"
                value={phone}
                ref={phoneInput}
                // onSubmitEditting={() => focusNextInput(phoneInput)}
                returnKeyType={'next'}
                onChangeText={text => setPhone(text)}
              />
              <View style={styles.pickerView}>
                <Picker
                  selectedValue={relation}
                  onValueChange={itemValue => setRelation(itemValue)}
                  dropdownIconColor={'white'}
                  style={styles.picker}>
                  <Picker.Item
                    label="Relation"
                    style={styles.pickerItem}
                    enabled={false}
                    value="Relation"></Picker.Item>
                  <Picker.Item
                    label="Father"
                    style={styles.pickerItem}
                    value="Father"></Picker.Item>
                  <Picker.Item
                    label="Mother"
                    style={styles.pickerItem}
                    value="Mother"></Picker.Item>
                  <Picker.Item
                    label="Sister"
                    style={styles.pickerItem}
                    value="Sister"></Picker.Item>
                  <Picker.Item
                    label="Brother"
                    style={styles.pickerItem}
                    value="Brother"></Picker.Item>
                  <Picker.Item
                    label="Husband"
                    style={styles.pickerItem}
                    value="Husband"></Picker.Item>
                  <Picker.Item
                    label="Wife"
                    style={styles.pickerItem}
                    value="Wife"></Picker.Item>
                  <Picker.Item
                    label="Son"
                    style={styles.pickerItem}
                    value="Son"></Picker.Item>
                  <Picker.Item
                    label="Daughter"
                    style={styles.pickerItem}
                    value="Daughter"></Picker.Item>
                </Picker>
              </View>
              <View style={styles.btnView}>
                <TouchableOpacity
                  style={styles.saveToS}
                  onPress={addContactOnPress}>
                  <Text style={styles.saveBtnS}>Save</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Emergency Contact has been added.
                      </Text>
                      <Button
                        style={[styles.button, styles.buttonClose]}
                        onPress={buttonOk}
                        name="Ok"
                      />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default AddContactScreen;
/*onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}*/
