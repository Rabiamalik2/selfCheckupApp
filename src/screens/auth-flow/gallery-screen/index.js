//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,ImageBackground,TouchableOpacity,BackHandler, SafeAreaView } from 'react-native';
import {useFocusEffect,  useNavigation} from '@react-navigation/native';
import styles from './styles';
import Images from '../../../services/constants/images';
// create a component
const GalleryScreen = (props) => {
    const navigation = useNavigation();
   
    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.screenToStyle} onPress={() => props.navigation.navigate('authNavigator', { screen: 'signupCompleteScreen' })}>
            <ImageBackground style={styles.bgImgStyle} source={Images.choosePic} />
        </TouchableOpacity>
    </SafeAreaView>
    );
};



//make this component available to the app
export default GalleryScreen;
