//import libraries
import React, {Component, useState, createRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import styles from './styles';
import Loader from '../../../components/loader';
import Onboarding from '../../../components/my-carousal/onboarding';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import {fetchUserData} from '../../../services/apis/app/userApis';
import {setUser} from '../../../services/redux/reducers/user-reducer';
// create a component
const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  // const [userData, setUserData] = useState(null);
  // console.log("user", userData)
  const isTokenValid = async token => {
    try {
      setLoading(true);
      const response = await fetchUserData(token);
      console.log('isTokenValid', response.user);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };
  const checkKeychainAndNavigate = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        const token = credentials.password;
        const isValid = await isTokenValid(token);
        // console.log("isuser: ", isValid.user)
        dispatch(setUser(isValid.user));
        // setUserData(isValid.user);
        if (isValid) {
          navigation.dispatch(
            StackActions.replace('appNavigator', {
              screen: 'dashboardScreen',
            }),
          );
        } else {
          navigation.dispatch(
            StackActions.replace('authNavigator', {screen: 'loginScreen'}),
          );
        }
      }
    } catch (error) {
      console.error('Error while checking keychain:', error);
    }
  };
  useEffect(() => {
    checkKeychainAndNavigate();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <Onboarding />
    </SafeAreaView>
  );
};

//make this component available to the app
export default WelcomeScreen;
