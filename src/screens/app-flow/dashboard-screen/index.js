//import liraries
import React from 'react';
import {View, Text, Image, TouchableOpacity, BackHandler} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styles from './styles';
import Images from '../../../services/constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteNames from '../../../services/constants/route-names';
// create a component
const DashboardScreen = props => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('authNavigator', {screen: 'welcomeScreen'});
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(RouteNames.navigatorNames.appNavigator, {
              screen: RouteNames.appRoutes.settingScreen,
            })
          }>
          <MaterialIcons name="person" style={styles.iconContact} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewS1}>
        <View style={styles.viewImg1}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate(
                RouteNames.navigatorNames.tabNavigator,
                {
                  screen: RouteNames.tabNavRoutes.vitalSignsScreen,
                },
              )
            }>
            <Image source={Images.vital} style={styles.img1} />
            <Text style={styles.txtImg1}>Vital Signs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewImg2}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate(
                RouteNames.navigatorNames.selfCheckNavigator,
                {
                  screen: RouteNames.selfCheckNavRoutes.questionScreen1,
                },
              )
            }>
            <Image source={Images.meter} style={styles.img2}></Image>
            <Text style={[styles.txtImg2]}>Heart Attack {'\n'} Risk Meter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewImg3}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate(
                RouteNames.navigatorNames.tabNavigator,
                {
                  screen: RouteNames.navigatorNames.selfCheckNavigator,
                },
              )
            }>
            <Image source={Images.checkup} style={styles.img3}></Image>
            <Text style={styles.txtImg3}>Self Checkup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.viewS2}>
            <View style={styles.viewSos}>
              <TouchableOpacity
                style={styles.sosTo}
                onPress={() =>
                  props.navigation.navigate(
                    RouteNames.navigatorNames.tabNavigator,
                    {
                      screen: RouteNames.navigatorNames.sosNavigator,
                    },
                  )
                }>
                <Text style={styles.txtSos}>S</Text>
                <MaterialIcons name="call" style={styles.iconSos} />
                <Text style={styles.txtSos}>S</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewS3}>
        <View style={styles.viewImg4}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate(
                RouteNames.navigatorNames.tabNavigator,
                {
                  screen: RouteNames.tabNavRoutes.chatGptScreen,
                },
              )
            }>
            <Image source={Images.chat} style={styles.img4}></Image>
            <Text style={styles.txtImg4}>ChatGpt</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewImg5}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate(
                RouteNames.navigatorNames.tabNavigator,
                {
                  screen: RouteNames.navigatorNames.funNavigator,
                },
              )
            }>
            <Image source={Images.fun} style={styles.img5}></Image>
            <Text style={styles.txtImg5}>Edu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.contactTo}
          onPress={() =>
            props.navigation.navigate(RouteNames.navigatorNames.sosNavigator, {
              screen: RouteNames.sosNavRoutes.emergencyContactScreen,
            })
          }>
          <MaterialIcons name="contacts" style={styles.iconContact} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default DashboardScreen;
