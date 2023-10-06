import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Colors from '../services/constants/colors';
const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  if (visible) {
    return (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: Colors.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
  },
});

export default Loader;
