import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  useRoute,
} from '@react-navigation/native';
import styles from '../setting-screen/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';


const SettingScreen = (props) => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.user);
  console.log('sys:', userData);
  const Logout = () => {
    navigation.navigate('authNavigator', {screen: 'loginScreen'});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.istView}>
        <TouchableOpacity onPress={()=> props.navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.txtProfile}>Profile</Text>
      </View>
      <View style={styles.optionStyle}>
        <Text style={styles.infoTxt}>Your Information</Text>

        <TouchableOpacity style={styles.biView}>
          <MaterialCommunityIcons
            name="card-account-details"
            style={styles.biIcon}
          />
          <Text style={styles.biTxt}>Basic Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biView}
        onPress={() =>
          navigation.dispatch(
            StackActions.replace('sosNavigator', {
              screen: "personalInfoScreen",
            }))
        }
        >
          <MaterialCommunityIcons
            name="clipboard-account-outline"
            style={styles.pInfoIcon}
          />
          <Text style={styles.biTxt}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.biView}>
          <MaterialCommunityIcons name="sticker-text-outline" style={styles.hbIcon} />
          <Text style={styles.biTxt}>Health Background</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biView}>
          <MaterialIcons name="medication" style={styles.medicIcon} />
          <Text style={styles.biTxt}>Medication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biView}>
          <MaterialCommunityIcons name="bee" style={styles.allergiesIcon} />
          <Text style={styles.biTxt}>Allergies</Text>
        </TouchableOpacity>

        <View style={styles.historyView}>
          <Text style={styles.infoTxt}>History</Text>

          <TouchableOpacity style={styles.biView}>
            <MaterialIcons
              name="insert-chart-outlined"
              style={styles.haIcon}
            />
            <Text style={styles.biTxt}>Health Assessments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.biView}>
            <MaterialCommunityIcons
              name="vector-polyline"
              style={styles.stIcon}
            />
            <Text style={styles.biTxt}>Symptom Tracking</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.biView}>
          <Text style={styles.deleteTxt}>Delete health Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutView} onPress={Logout}>
          <MaterialIcons name="logout" style={styles.logout} />
          <Text style={styles.biTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
