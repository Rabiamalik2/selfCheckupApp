//import lirarieb
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RouteNames from '../../../services/constants/route-names';
const SelfCheckupScreen = props => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.scView}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <MaterialIcons name="west" style={styles.westIcon} />
          </TouchableOpacity>
          <Text style={styles.selfTxt}>Self</Text>
          <Text style={styles.checkTxt}>Check</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt1}> Question 1 of 20</Text>
          <Text style={styles.subTxt}>
            Chest discomfort feels like as pain, {'\n'} or fullness, and/or
            squeezing {'\n'} sensations of the chest?
          </Text>
        </View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={styles.viewS2}>
              <View style={styles.btnView}>
                <TouchableOpacity
                  style={styles.btnToStyle}
                  onPress={() =>
                    props.navigation.navigate(
                      RouteNames.navigatorNames.selfCheckNavigator,
                      {
                        screen: RouteNames.selfCheckNavRoutes.questionScreen1,
                      },
                    )
                  }>
                  <Text style={styles.btnTxtStyle}>Yes</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnView1}>
                <TouchableOpacity
                  style={styles.btnToStyle1}
                  onPress={() =>
                    Alert.alert(
                      'Your situation is under control. keep checking in daily.',
                    )
                  }>
                  <Text style={styles.btnTxtStyle1}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
//make this component available to the app
export default SelfCheckupScreen;
