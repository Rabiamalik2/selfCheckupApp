import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
  CommonActions,
  useRoute,
} from '@react-navigation/native';
import Gavel from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Button from '../../../components/button-component/index.js';
import Account from '../../../components/text-input-component/haveAccount';
import Terms from '../../../components/text-input-component/termsConditions';
import RouteNames from '../../../services/constants/route-names';
const TermsScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const isReadOnly = route.params?.isReadOnly || false;
  //console.log("Route.params:", Route.params);
  const user = route.params?.user.newUser;
  console.log("Terms Screen",user)
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
  const points = [
    {
      key: '1',
      description:
        '1. Acceptance of Terms By accessing and using the Self Health Check App, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using the app.',
    },
    {
      key: '2',
      description:
        '2. Privacy and Data Security We value your privacy and are committed to protecting your personal information. By using the app, you consent to the collection, storage, and use of your data as outlined in our Privacy Policy',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewS1}>
        <Text style={styles.txtS1}>Self</Text>
        <Text style={styles.txtS2}>Check</Text>
      </View>
      <View style={styles.parentView}>
        <View style={styles.childView}>
          <View style={styles.viewS2}>
            <View style={styles.viewS3}>
              <Gavel name="gavel" style={styles.gavel} />
            </View>
            <Text style={styles.tcS}>Terms & Conditions</Text>
            <View style={styles.squareView}>
              <FlatList
                showsVerticalScrollIndicator={true}
                keyExtractor={index => {
                  return index.key;
                }}
                data={points}
                renderItem={({item}) => {
                  return <Text style={styles.item}>{item.description}</Text>;
                }}
              />
            </View>
            <View style={styles.viewS4}>
              <Text style={styles.continueTxt}>
                By Continuing, you agree to our terms of services and
              </Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.replace('authNavigator', {
                    screen: 'registerScreen',
                  })
                }
                style={styles.toStyle2}>
                <Text style={styles.privacyTxt}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            {isReadOnly === false ? (
              <Button
                style={[styles.toS1, {color: 'white'}]}
                onPress={() =>
                  navigation.navigate(
                    RouteNames.authRoutes.choosePicScreen,
                    (params = {user}),
                  )
                }
                name="I Agree"
              />
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </View>

      <Account
        name="Sign In"
        description="Already have an Account?"
        onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}
      />
      <Terms
        name="Terms & Conditions"
        onPress={() =>
          navigation.dispatch(
            StackActions.replace('authNavigator', {
              screen: 'termScreen',
              params: {isReadOnly: true},
            }),
          )
        }
      />

      <Text>Read-Only: {isReadOnly.toString()}</Text>
    </SafeAreaView>
  );
};

export default TermsScreen;
