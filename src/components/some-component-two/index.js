//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
// create a component
const SomeComponentTwo = ({ propOne, propTwo }) => {
    return (
        <View style={styles.container}>
            <Text>SomeComponentTwo</Text>
        </View>
    );
};



//make this component available to the app
export default SomeComponentTwo;
