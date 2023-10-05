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
import styles from './funItemsStyle1';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// create a component
const FunItem1 = props => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions('screen');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        // onPress={Alert.alert('No Cycling Activity for now')}
        style={{flex: 1.4, marginLeft: 20, marginTop: 20}}>
        <Image source={props.imageUri} style={styles.image} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FunItem1;
