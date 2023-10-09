import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
// create a component
const PopularActivities = ({source, name, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.popTo}>
        <Image source={source} style={styles.image} />
        <View style={styles.popView}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//make this component available to the app
export default PopularActivities;
