//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import styles from './styles';
import Loader from '../../../components/loader';
import {
  fetchEmergencyContacts,
  sendSosMessageCall,
} from '../../../services/apis/app/contactApis';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
  CommonActions,
  StackActions,
} from '@react-navigation/native';
import Button from '../../../components/button-component';
import * as Keychain from 'react-native-keychain';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteNames from '../../../services/constants/route-names';

// create a component
const SosScreen = props => {
  const userData = useSelector(state => state.user);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        props.navigation.goBack();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const buttonOk = () => {
    setModalVisible(false);
    props.navigation.navigate(RouteNames.sosNavRoutes.addContactScreen);
  };
  const getEmergencyContacts = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchEmergencyContacts(userData.user._id);
      setData(fetchedData);
      if (data.length <= 0) {
        setModalVisible(true);
      }
      setLoading(false);
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
        console.error('Error sending data:', error);
        Alert.alert('Error', error);
      }
    }
  };
  const sendMessage = async phone => {
    console.log('phone:', phone);
    try {
      setLoading(true);
      const response = await sendSosMessageCall(phone);
      setLoading(false);
      if (response.status === 200) {
        setLoading(false);
        Alert.alert('message sent');
        console.log('Message Sent');
      } else {
        setLoading(false);
        console.error('Error:', response.data);
        Alert.alert("Message couldn't be send");
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
        console.error('Error:', error);
        Alert.alert('Error');
      }
    }
  };
  useEffect(() => {
    getEmergencyContacts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={{alignItems: 'center'}}>
        <View style={styles.scView}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <MaterialIcons name="west" style={styles.iconSty} />
          </TouchableOpacity>
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>
        <Text style={styles.txt1}>Informing</Text>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() =>
            props.navigation.navigate(RouteNames.navigatorNames.sosNavigator, {
              screen: RouteNames.sosNavRoutes.emergencyContactScreen,
            })
          }>
          <Text style={styles.txt2}>Your Emergency Contacts</Text>
        </TouchableOpacity>
        {data.length <= 0 ? (
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    You have no Emergency Contacts at the moment please enter
                    atleast one.
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
        ) : (
          <View style={styles.flatListView}>
            <FlatList
              data={data}
              keyExtractor={item => item._id.toString()}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => sendMessage(item.phone)}>
                  <Text style={styles.txt3}>
                    {item ? item.firstname : 'Loading...'}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        <Text style={styles.txt4}>via Text Message</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.viewS2}>
            <Text style={styles.txt5}>& THEN</Text>
            <Text style={styles.txt6}>Calling 911</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default SosScreen;
