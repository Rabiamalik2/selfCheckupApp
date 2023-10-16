import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
// create a component
const HealthItem = ({source, name, onPress}) => {
  const [disable, setDisable] = useState(true);
  const handleOnPress = () => {setDisable(true)};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOnPress}
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
