//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  BackHandler,
} from 'react-native';
import styles from './styles';
import {
  fetchEmergencyContacts,
  deleteContact,
} from '../../../services/apis/app/contactApis';
import {
  useNavigation,
  CommonActions,
  useIsFocused,
  useFocusEffect,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../../../components/loader';
import Button from '../../../components/button-component';
import RouteNames from '../../../services/constants/route-names';

const EmergencyContactScreen = props => {
  const [contactId, setContactId] = useState('');
  const userData = useSelector(state => state.user);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused(true);
  const [modalVisible, setModalVisible] = useState(false);

  const buttonDel = id => {
    setContactId(id);
    setModalVisible(true);
  };
  const cancelDelete = () => {
    setModalVisible(false);
  };
  // console.log('contacts', data.length);
  const getEmergencyContacts = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchEmergencyContacts(userData.user._id);
      setData(fetchedData);
      console.log('apiFunc', fetchedData);
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
      } else if (error.response && error.response.status === 404) {
        console.error('Error:', error);
        Alert.alert('User not found', error);
      } else {
        console.error('Error:', error);
        Alert.alert('Error getting contacts', error);
      }
    }
  };
  const deleteEmergencyContact = async () => {
    try {
      console.log(contactId);
      setModalVisible(false);
      setLoading(true);
      const response = await deleteContact(userData.user._id, contactId);
      if (response.status == 204) {
        getEmergencyContacts();
      } else if (response.status == 201) {
        setLoading(false);
        const fetchedData = await fetchEmergencyContacts(userData.user._id);
        console.log('contact Deleted ', fetchedData.length);
        setData(fetchedData);
        if (fetchedData.length <= 0) {
          // setLoading(false)
          navigation.navigate(RouteNames.sosNavRoutes.addContactScreen);
          getEmergencyContacts();
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
        console.error('Error deleting:', error);
        Alert.alert('Error during deleting contact', error);
      }
    }
  };
  useEffect(() => {
    console.log(isFocused)
    if (isFocused) {
      getEmergencyContacts();
      console.log('onpage');
    }
  }, [isFocused]);//dependency
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.scView}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(RouteNames.navigatorNames.appNavigator, {
              screen: RouteNames.appRoutes.dashboardScreen,
            })
          }>
          <MaterialIcons name="west" style={styles.westIcon} />
        </TouchableOpacity>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt1}> Emergency Contacts</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.viewS2}>
            <View style={styles.iconView}>
              <MaterialIcons name="person-add-alt" style={styles.icon} />
            </View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(
                  RouteNames.navigatorNames.sosNavigator,
                  {
                    screen: RouteNames.sosNavRoutes.addContactScreen,
                  },
                )
              }>
              <Text style={styles.mainTxt}>Add Emergency Contacts</Text>
            </TouchableOpacity>

            <View style={styles.flatListView}>
              <FlatList
                data={data}
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => (
                  <View style={styles.subView}>
                    <View style={styles.rowContainer}>
                      <Text style={styles.subTxt}>
                        {item ? item.firstname : 'Loading...'}
                      </Text>
                      <View style={styles.iconContainer}>
                        <TouchableOpacity
                          style={styles.icon1View}
                          onPress={() =>
                            props.navigation.navigate(
                              RouteNames.navigatorNames.sosNavigator,
                              {
                                screen:
                                  RouteNames.sosNavRoutes.addContactScreen,
                                params: {itemId: item._id},
                              },
                            )
                          }>
                          <MaterialIcons
                            name="mode-edit-outline"
                            style={styles.icon1}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.icon1View}
                          onPress={() => buttonDel(item._id)}>
                          <Entypo name="cross" style={styles.icon1} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Do you really want to delete this contact?
                      </Text>
                      <View style={styles.buttonView}>
                        <Button
                          onPress={deleteEmergencyContact}
                          style={[styles.button]}
                          name="Yes"
                        />
                        <Button
                          onPress={cancelDelete}
                          style={[styles.button]}
                          name="No"
                        />
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EmergencyContactScreen;
