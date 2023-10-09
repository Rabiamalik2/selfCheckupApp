import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
// create a component
const RecentVideos = ({source, name}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={Alert.alert('No Cycling Activity for now')}
        style={styles.recTo}>
        <Image source={source} style={styles.image} />
        <View style={styles.recView}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RecentVideos;
