import React, {Component} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './obItemStyle';
// create a component
const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions('screen');

  return (
    <View style={[styles.container, {width, resizeMode: 'contain'}]}>
      <View style={styles.obView}>
        <Image
          source={item.image}
          style={[styles.image, {width, resizeMode: 'contain'}]}
        />
      </View>
      <View style={styles.itemView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default OnboardingItem;
