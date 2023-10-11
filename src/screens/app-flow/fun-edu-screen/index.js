//import liraries
import React,{useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopularActivities from '../../../components/fun-screen-items/popularActivities/index.js';
import RecentVideos from '../../../components/fun-screen-items/recentVideos/index.js';
import Images from '../../../services/constants/images';
import styles from './styles';
import RouteNames from '../../../services/constants/route-names.js';
// create a component
const FunEduScreen = props => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      key: '1',
      name: 'Yoga Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {screen: RouteNames.funNavRoutes.yogaActivityScreen}),
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
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {screen: RouteNames.funNavRoutes.healthEduScreen}),
      imageUri: Images.health,
    },
    {
      key: '4',
      name: 'Yoga Video Activity',
      onPress: () =>
        navigation.navigate(RouteNames.navigatorNames.funNavigator, {screen: RouteNames.funNavRoutes.liveActivityScreen}),
      imageUri: Images.person,
    },
  ])
  const renderItem = ({item}) => (
    <PopularActivities
      onPress={item.onPress}
      source={item.imageUri}
      name={item.name}
    />
  );
  const renderRecentItem = ({item}) => (
    <RecentVideos
      onPress={item.onPress}
      source={item.imageUri}
      name={item.name}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="west" style={styles.westSty} />
        </TouchableOpacity>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
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
        <View style={styles.viewchild1}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.childTxt}> Recent Videos</Text>
          </View>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={renderRecentItem}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default FunEduScreen;
