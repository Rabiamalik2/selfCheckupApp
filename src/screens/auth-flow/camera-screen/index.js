//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,ImageBackground,TouchableOpacity,BackHandler} from 'react-native';
import {useFocusEffect,  useNavigation} from '@react-navigation/native';
import Images from '../../../services/constants/images';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// create a component
const CamScreen = (props) => {
    const navigation = useNavigation();
   
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.screenToStyle} onPress={() => props.navigation.navigate('authNavigator', { screen: 'signupCompleteScreen' })}>
                <ImageBackground style={styles.bgImgStyle} source={Images.campage} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};



//make this component available to the app
export default CamScreen;
