import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import styles from './obItemStyle';
import slides from './slides';
// create a component
const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions('screen');

  return (
    <View style={[styles.container, {width, resizeMode: 'contain'}]}>
      <View style={{flex: 0.6, marginTop: 130}}>
        <Image
          source={item.image}
          style={[styles.image, {width, resizeMode: 'contain'}]}
        />
      </View>
      <View style={{flex: 1, marginTop: 50}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default OnboardingItem;
