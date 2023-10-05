//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
// create a component
const SomeComponentOne = ({ propOne, propTwo }) => {
    return (
        <View style={styles.container}>
            <Text>SomeComponentOne</Text>
        </View>
    );
};



//make this component available to the app
export default SomeComponentOne;
