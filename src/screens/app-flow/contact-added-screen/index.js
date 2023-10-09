//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import RouteNames from '../../../services/constants/route-names';
import Colors from '../../../services/constants/colors';
// create a component

const ContactAddedScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialIcons name="west" style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt1}> Contact has been added successfully!</Text>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.viewS2}>
            <Icon name="verified" style={styles.compCS}></Icon>
            <Text style={styles.contactAddedTxt}>Contact Added!</Text>
            <Text style={styles.subTxt}>
              An Invitation has been sent to the Contact Added with App link to
              download the App through the link.
            </Text>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() =>
                props.navigation.navigate(
                  RouteNames.navigatorNames.appNavigator,
                  {screen: RouteNames.appRoutes.dashboardScreen},
                )
              }>
              <Text style={{color: Colors.white, marginTop: 20}}>
                [TWILLO API]
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ContactAddedScreen;
