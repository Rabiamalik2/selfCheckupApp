import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// create a component
const RecentVideos = ({source, name}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={Alert.alert('No Cycling Activity for now')}
        style={{flex: 1.4, marginLeft: 20, marginTop: 20}}>
        <Image source={source} style={styles.image} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RecentVideos;
