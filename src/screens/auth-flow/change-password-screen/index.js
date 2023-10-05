//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import NoAccount from '../../../components/text-input-component/noAccount';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// create a component
const ChangePasswordScreen = props => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
    enableOnAndroid={true}
    extraScrollHeight={100}
    keyboardShouldPersistTaps='handled'
    scrollEnabled={false} 
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.viewS1}>
        <Text style={styles.txtS1}>Self</Text>
        <Text style={styles.txtS2}>Check</Text>
      </View>
      <View style={styles.parentView}>
        <View style={styles.childView}>
          <View style={styles.viewS2}>
            <View style={styles.lockView}>
              <MaterialIcons name="password" style={styles.lock} />
            </View>
            <Text style={styles.fpTxt}>Change Password</Text>
            <Text style={styles.item}>
              Welcome back to the Self Health Check App! Please login to your
              account and continue your health journey.
            </Text>
            <View>
              <View style={styles.viewpass}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  style={styles.textPsdS}
                />
                <Entypo name="eye-with-line" style={styles.icon1S} />
              </View>
              <View style={styles.viewpass}>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  style={styles.textPsdS}
                />
                <Entypo name="eye-with-line" style={styles.icon1S} />
              </View>
            </View>
            <View style={styles.btnSigninView}>
              <TouchableOpacity
                style={styles.toSignin}
                onPress={() =>
                  props.navigation.navigate('authNavigator', {
                    screen: 'loginScreen',
                  })
                }>
                <Text style={styles.signinS}>UPDATE PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <NoAccount
        name="Register"
        description="Dont have an Account?"
        onPress={() =>
          navigation.navigate(RouteNames.authRoutes.registerScreen)
        }
      />
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

//make this component available to the app
export default ChangePasswordScreen;
