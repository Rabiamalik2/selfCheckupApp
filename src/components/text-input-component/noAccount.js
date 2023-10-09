import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';
const NoAccount = ({name, description, onPress}) => {
  return (
    <View style={styles.viewS7}>
      <Text style={styles.txtS3}>{description}</Text>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={styles.toStyle2}>
        <Text style={styles.txtS4}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoAccount;

const styles = StyleSheet.create({
  viewS7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  toStyle2: {
    paddingLeft: 6,
  },
  txtS3: {
    color: Colors.purple,
    fontFamily: Fonts.poppinsBold,
  },
  txtS4: {
    flex: 1,
    paddingVertical: 0,
    color: Colors.orange,
    fontFamily: Fonts.poppinsExtraBold,
  },
});
