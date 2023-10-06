//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,  Image, useWindowDimensions,BackHandler ,SafeAreaView} from 'react-native';
import {useFocusEffect,  useNavigation,StackActions,CommonActions } from '@react-navigation/native';
import RouteNames from '../../../services/constants/route-names';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Button from '../../../components/button-component/index.js';
import NoAccount from '../../../components/text-input-component/noAccount';
// create a component
const SignupCompleteScreen = (props) => {
    const navigation = useNavigation();
   
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.viewS1}>
            <Text style={styles.txtS1}>Self</Text>
            <Text style={styles.txtS2}>Check</Text>
        </View>
        <View style={styles.parentView}>
            <View style={styles.childView}>
                <View style={styles.viewS2}>
                    <Icon name= 'verified' style={styles.userCS}></Icon> 
                    <Text style={styles.regCompTxt}>Registration Completed</Text>
                    <Text style={styles.item}>
                    You now have access to a wide range of features and resources designed to support your health journey. 
                    Take advantage of our self-checkup questionnaires, vital signs tracking, educational materials, and engaging activities. 
                    We are here to empower you on your path to a healthier lifestyle.
                    </Text><Text style={styles.item}>
                    Thank you for choosing the Self Health Check App.
                    We look forward to accompanying you on this transformative journey towards improved health and well-being.
                    </Text>
                    <Button onPress={() => navigation.dispatch(StackActions.replace ('authNavigator' ,{screen: 'loginScreen'}))} style={styles.toSignin}
                            name='Sign In'
                        />
                </View>
            </View>
        </View>
        <NoAccount name='Register' description='Dont have an Account?'
                onPress={() => navigation.navigate(RouteNames.authRoutes.registerScreen)} />

        </SafeAreaView>
    );
};



//make this component available to the app
export default SignupCompleteScreen;
