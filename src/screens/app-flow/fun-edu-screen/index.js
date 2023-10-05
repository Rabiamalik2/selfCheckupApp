//import liraries
import React, {Component, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FunItem from '../../../components/fun-screen-items/funItems';
import FunItem1 from '../../../components/fun-screen-items/funItem1';
import Video from 'react-native-video';
import Images from '../../../services/constants/images';
import styles from './styles';
// create a component
const FunEduScreen = props => {
  const navigation = useNavigation();
  const data = [
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
      onPress: Alert.alert("No Cycling Activity for now"),
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
    <FunItem onPress={item.onPress} imageUri={item.imageUri} name={item.name} />
  );
  const renderRecentItem = ({item}) => (
    <FunItem1
      onPress={item.onPress}
      imageUri={item.imageUri}
      name={item.name}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView scrollEventThrottle={32}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}> Popular Activities</Text>
        </View>
        <View style={styles.parent}>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
        <View style={styles.child}>
          <View style={{marginTop: 20, height: responsiveHeight(30)}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  alignItems: 'center',
                  marginTop: 30,
                  fontFamily: 'Poppins-Bold',
                  fontSize: responsiveFontSize(2),
                  fontWeight: '400',
                  color: 'white',
                }}>
                {' '}
                Recent Videos
              </Text>
            </View>
            <FlatList
              data={data}
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
export default FunEduScreen;
