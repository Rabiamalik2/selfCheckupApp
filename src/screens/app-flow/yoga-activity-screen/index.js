//import liraries
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from './styles';
import Images from '../../../services/constants/images';
import {SafeAreaView} from 'react-native-safe-area-context';
// create a component

const YogaActivityScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <View style={styles.yogaActTxt}>
        <Text style={styles.txt1}> Yoga Activity</Text>
        <View
          style={styles.imgView}>
          <Image
            source={Images.person}
            style={styles.imgStyle}
          />
        </View>
      </View>
      <View style={styles.inpStyle}>
        <TextInput
          placeholder="Type Here"
          style={styles.txtStyle}
        />
        <Text style={styles.subTxt}>
          Amazing Yoga Trainer: Samina Naz {'\n'}9:20 am-12/03/2023{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default YogaActivityScreen;
