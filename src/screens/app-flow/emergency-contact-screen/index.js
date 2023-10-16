//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
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
  const userData = useSelector(state => state.user);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const buttonOk = () => {
    setModalVisible(false);
    props.navigation.navigate(RouteNames.sosNavRoutes.addContactScreen);
  };
  // console.log('contacts', data.length);
  const getEmergencyContacts = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchEmergencyContacts(userData.user._id);
      setData(fetchedData);
      if(data.length <=0 ){
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
        console.error('Error:', error);
        Alert.alert('Error getting contacts', error);
      }
    }
  };
  const deleteContacts = async id => {
    try {
      console.log(id);
      setLoading(true);

      const response = await deleteContact(userData.user._id, id);
      setLoading(false);
      if (response.status == 204) {
        setLoading(false);
        getEmergencyContacts();
        console.log('contact Deleted ');
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
    if (isFocused) {
      getEmergencyContacts();
    }
  }, []);
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
              {data.length <= 0 ? (
                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                          You have no Emergency Contacts at the moment please
                          enter atleast one.
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
                            onPress={() => deleteContacts(item._id)}>
                            <Entypo name="cross" style={styles.icon1} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                />

                // <View><Text>No Contacts</Text></View>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EmergencyContactScreen;
