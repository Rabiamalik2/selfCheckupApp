//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import Loader from '../../../components/loader';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  fetchEmergencyContacts,
  sendSosMessageCall,
} from '../../../services/apis/auth';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
const SosScreen = props => {
  const userData = useSelector(state => state.user);
  // console.log('sos:', userData);

  const navigation = useNavigation();
  const Route = useRoute();
  // console.log(userID);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        props.navigation.goBack();
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([]);
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
      console.error('Error:', error);
      Alert.alert('Error');
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
            <Icon
              name="west"
              style={{
                left: -60,
                fontSize: responsiveFontSize(4),
                color: '#33295d',
              }}></Icon>
          </TouchableOpacity>
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>
        <Text style={styles.txt1}>Informing</Text>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() =>
            props.navigation.navigate('sosNavigator', {
              screen: 'emergencyContactScreen',
            })
          }>
          <Text style={styles.txt2}>Your Emergency Contacts</Text>
        </TouchableOpacity>
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
