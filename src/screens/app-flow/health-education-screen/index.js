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
import RouteNames from '../../../services/constants/route-names.js';
import PopularActivities from '../../../components/fun-screen-items/popularActivities/index.js';
import RecentVideos from '../../../components/fun-screen-items/recentVideos/index.js';
import HealthItem from '../../../components/health-screen-items/index..js';
import styles from '../health-education-screen/styles.js';
import Images from '../../../services/constants/images';
import Colors from '../../../services/constants/colors.js';
// create a component

const HealthEduScreen = props => {
  const navigation = useNavigation();
  const [disable, setDisable] = useState(true);
  const handleOnPress = () => {
    setDisable(true);
  };
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Health Insurance',
      imageUri: Images.img5,
    },
    {
      key: '2',
      name: 'Health Activity',
      imageUri: Images.img6,
    },
    {
      key: '3',
      name: 'Yoga Video Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.liveActivityScreen,
        }),
      imageUri: Images.person,
    },
    {
      key: '4',
      name: 'Cycling Activity',
      imageUri: Images.bike,
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.healthEduScreen,
        }),
    },
  ]);
  const [data1, setData1] = useState([
    {
      key: '1',
      name: 'Yoga Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.yogaActivityScreen,
        }),
      imageUri: Images.person,
    },
    {
      key: '2',
      name: 'Cycling Activity',
      imageUri: Images.bike,
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.healthEduScreen,
        }),
    },
    {
      key: '3',
      name: 'Health Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.healthEduScreen,
        }),
      imageUri: Images.health,
    },
    {
      key: '4',
      name: 'Yoga Video Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {
          screen: RouteNames.funNavRoutes.liveActivityScreen,
        }),
      imageUri: Images.person,
    },
  ]);
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
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
        </View>
        <View style={[styles.child, {backgroundColor: Colors.orange}]}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.childTxt}> Recent Videos</Text>
          </View>
          <View style={styles.flatlistView}>
            <FlatList
              data={data1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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
