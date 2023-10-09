import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
// create a component
const HealthItem = ({source, name, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.healthTo}>
        <Image source={source} style={styles.image} />
        <View style={styles.healthView}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HealthItem;
