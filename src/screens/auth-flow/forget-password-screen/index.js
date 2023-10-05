//import liraries
import React, { Component,useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, BackHandler, SafeAreaView } from 'react-native';
import { useFocusEffect, useNavigation, StackActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import RouteNames from '../../../services/constants/route-names';
import Input from '../../../components/text-input-component/textInput';
import PasswordInput from '../../../components/text-input-component/passwordInput';
import Button from '../../../components/button-component/button';
import Account from '../../../components/text-input-component/haveAccount';
// create a component
const ForgetPasswordScreen = (props) => {
    const navigation = useNavigation();
    const [emailaddress, setEmailaddress] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewS1}>
                <Text style={styles.txtS1}>Self</Text>
                <Text style={styles.txtS2}>Check</Text>
            </View>
            <View style={styles.parentView}>
                <View style={styles.childView}>
                    <View style={styles.viewS2}>
                        <View style={styles.backArrowView}>
                            <Ionicons name='arrow-back-outline' style={styles.backArrow} />
                        </View>
                        <Text style={styles.fpTxt}>Forgot Password</Text>
                        <Text style={styles.item}>
                            Enter the email address associated with your account below. We will send you a password reset link
                        </Text>
                        <Input
                        autoCapitalize="none"
                        placeholder={'Email Address'}
                        placeholderTextColor="white"
                        keyboardType="email-address"
                        value={emailaddress}
                        onChangeText={text => setEmailaddress(text)}
                      />
                        <Button onPress={() => navigation.dispatch(StackActions.replace('authNavigator', { screen: 'codeScreen' }))} style={styles.toSignin}
                            name='RESET PASSWORD' />
                        <Text style={styles.item}>
                            You will receive a code on your email if your account exists on the app.
                            You will be able to reset your password after successful authorization.
                        </Text>
                    </View>
                </View>
            </View>
            <Account name='Sign In' description=' Remembered your password?'  onPress={() => navigation.navigate(RouteNames.authRoutes.loginScreen)}/>
        </SafeAreaView>
    );
};



//make this component available to the app
export default ForgetPasswordScreen;
