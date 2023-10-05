//import liraries
//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, BackHandler, SafeAreaView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input'

// create a component
const CodeScreen = (props) => {
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
                        <View style={styles.lockView}>
                            <MaterialIcons name='lock-outline' style={styles.lock} />
                        </View>
                        <Text style={styles.fpTxt}>Enter Code</Text>
                        <Text style={styles.item}>
                            Please enter the verification code that was sent to your email address.
                        </Text>
                        <OTPInputView
                            style={{ width: '80%', height: 200 }}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code) => {
                                console.log(`Code is ${code}, you are good to go!`)
                            }}
                        />
                        <View style={styles.btnNextView}>
                            <TouchableOpacity style={styles.nextTo} onPress={() => props.navigation.navigate('authNavigator', { screen: 'changepasswordScreen' })}>
                                <Text style={styles.txtNextS}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.item}>
                            Once entered correctly, you can proceed to reset your password and regain access to your account
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewS6}>
                <Text style={styles.accTxt}>
                    Reset your password
                </Text>

            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default CodeScreen;
