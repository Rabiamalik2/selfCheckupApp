//import liraries
import React, {
  Component,
} from 'react';
import {
  Button,
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../../services/constants/images';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// create a component

const LiveActivityScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scView}>
        <Text style={styles.selfTxt}>Self</Text>
        <Text style={styles.checkTxt}>Check</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt1}> Live Activity Participation</Text>
        <View
          style={{
            alignItems: 'center',
            height: responsiveHeight(40),
            width: responsiveWidth(100),
          }}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
            resizeMode="contain"
            style={styles.youtubePlayer}
          />
        </View>
      </View>
      <View style={{marginTop: 10, marginLeft: 50}}>
        <Text style={styles.subTxt}>
          Activity: Activity Name{'\n'}Date: Date{'\n'}Time: Time{'\n'}Location:
          Location{'\n'}
          {'\n'}
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing{'\n'}elit. Aliquam
          interdum mauris nec tellus sollicitudin,{'\n'}id congue leo volutpat.
          Nunc a libero velit.{'\n'}
          {'\n'}
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing{'\n'}elit. Aliquam
          interdum mauris nec tellus sollicitudin,{'\n'}id congue leo volutpat.
          Nunc a libero velit.
        </Text>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LiveActivityScreen;
