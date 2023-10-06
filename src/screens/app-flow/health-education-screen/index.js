//import liraries
import React, {Component, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import PopularActivities from '../../../components/fun-screen-items/popularActivities/index.js';
import RecentVideos from '../../../components/fun-screen-items/recentVideos/index.js';
import HealthItem from '../../../components/health-screen-items/index..js';
import styles from '../fun-edu-screen/styles';
import Images from '../../../services/constants/images';
import Colors from '../../../services/constants/colors.js';
// create a component

const HealthEduScreen = props => {
  const navigation = useNavigation();
  const data = [
    {
      key: '1',
      name: 'Health Insurance',
      onPress: {},
      imageUri: Images.img5,
    },
    {
      key: '2',
      name: 'Health Activity',
      onPress: {},
      imageUri: Images.img6,
    },
    {
      key: '3',
      name: 'Yoga Video Activity',
      onPress: () =>
        navigation.navigate('funNavigator', {screen: 'liveActivityScreen'}),
      imageUri: Images.person,
    },
  ];
  const data1 = [
    {
      key: '1',
      name: 'Yoga Activity',
      onPress: () =>
        navigation.navigate('funNavigator', {screen: 'yogaActivityScreen'}),
      imageUri: Images.person,
    },
    {
      key: '2',
      name: 'Cycling Activity',
      imageUri: Images.bike,
      onPress: {},
    },
    {
      key: '3',
      name: 'Health Activity',
      onPress: () =>
        navigation.navigate('funNavigator', {screen: 'healthEduScreen'}),
      imageUri: Images.health,
    },
    {
      key: '4',
      name: 'Yoga Video Activity',
      onPress: () =>
        navigation.navigate('funNavigator', {screen: 'liveActivityScreen'}),
      imageUri: Images.person,
    },
  ];
  const renderItem = ({item}) => (
    <HealthItem
      onPress={item.onPress}
      source={item.imageUri}
      name={item.name}
    />
  );
  const renderRecentItem = ({item}) => (
    <PopularActivities
      onPress={item.onPress}
      source={item.imageUri}
      name={item.name}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <ScrollView scrollEventThrottle={32}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}> Health Education</Text>
        </View>
        <View style={styles.parent}>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
        <View style={[styles.child, {backgroundColor: Colors.orange}]}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                alignItems: 'center',
                marginTop: 30,
                fontFamily: 'Poppins-Bold',
                fontSize: responsiveFontSize(2),
                fontWeight: '400',
                color: Colors.white,
              }}>
              {' '}
              Recent Videos
            </Text>
          </View>
          <View style={{marginTop: 20, height: responsiveHeight(30)}}>
            <FlatList
              data={data1}
              horizontal={true}
              renderItem={renderRecentItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HealthEduScreen;
