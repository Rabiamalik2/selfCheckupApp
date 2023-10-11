//import libraries
import React, {useState} from 'react';
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
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Input from '../../../components/text-input-component/textInput';
import Button from '../../../components/button-component';
import Loader from '../../../components/loader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  addContacts,
  updateContact,
} from '../../../services/apis/app/contactApis';
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
  const [modalVisible, setModalVisible] = useState(false);
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
      console.error('Network error:', error);
      Alert.alert('Error during updating contact');
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{flex: 1}}
      enableOnAndroid={true}
      scrollEnabled={false}
      extraScrollHeight={50}>
      <SafeAreaView style={styles.container}>
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
                <TouchableOpacity
                  style={styles.saveToS}
                  onPress={addContactOnPress}>
                  <Text style={styles.saveBtnS}>Save</Text>
                </TouchableOpacity>
              </View>
              {modalVisible == true ? (
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
                          onPress={() => setModalVisible(!modalVisible)}
                          name="Ok"
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default AddContactScreen;
/*onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}*/
