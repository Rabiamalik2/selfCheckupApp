//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {
  fetchEmergencyContacts,
  deleteContact,
} from '../../../services/apis/app/contactApis';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Loader from '../../../components/loader';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// create a component

const EmergencyContactScreen = props => {
  const userData = useSelector(state => state.user);
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
  // console.log('contacts', data.length);
  const getEmergencyContacts = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchEmergencyContacts(userData.user._id);
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error sending data:', error);
    }
  };
  const deleteContacts = async (id) => {
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
      console.error('Error deleting:', error);
    }
  };
  useEffect(() => {
    getEmergencyContacts();
  }, []);
  return (
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
                props.navigation.navigate('sosNavigator', {
                  screen: 'addContactScreen',
                })
              }>
              <Text style={styles.mainTxt}>Add Emergency Contacts</Text>
            </TouchableOpacity>

            <View style={styles.flatListView}>
              <FlatList
                data={data}
                keyExtractor={item => item._id.toString()}
                renderItem={({item}) => (
                  <View style={styles.subView}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.subTxt}>
                        {item ? item.firstname : 'Loading...'}
                      </Text>
                      <TouchableOpacity
                        style={styles.icon1View}
                        onPress={() =>
                          props.navigation.navigate('sosNavigator', {
                            screen: 'addContactScreen',
                            params: {itemId: item._id},
                          })
                        }>
                        <MaterialIcons
                          name="mode-edit-outline"
                          styles={styles.icon1}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.icon1View}
                        onPress={() => deleteContacts(item._id)}>
                        <Entypo name="cross" styles={styles.icon1} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EmergencyContactScreen;
