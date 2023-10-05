//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import TabNavigation from '../../../services/navigation/app-navigation/tab-navigation';
// create a component
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>

        </View>
    );
};



//make this component available to the app
export default HomeScreen;
