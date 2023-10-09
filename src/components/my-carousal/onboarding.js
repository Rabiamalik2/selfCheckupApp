import React, {Component, useState, useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import styles from './styles';
import RouteNames from '../../services/constants/route-names';
import slides from './slides';
import Paginator from './paginator';
import {useNavigation, useRoute} from '@react-navigation/native';
import OnboardingItem from './onboardingItem';
// create a component
const Onboarding = props => {
  const navigation = useNavigation();
  //setValue(value: 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const Backdrop = ({scrollX}) => {
    return (
      <Animated.View style={[styles.parent, {position: 'absolute'}]}>
        <View style={styles.child}></View>
      </Animated.View>
    );
  };

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <Backdrop scrollX={scrollX} />
      <View style={{flex: 0}}>
        <Animated.FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <View style={{bottom: 130}}>
        <TouchableOpacity
          style={styles.registerTo}
          onPress={RouteNames.authRoutes.registerScreen}>
          <Text style={styles.registerTxt}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signinTo}
          onPress={() =>
            navigation.navigate(RouteNames.authRoutes.loginScreen)
          }>
          <Text style={styles.signinTxt}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.termsTo}
          onPress={() =>
            navigation.navigate('authNavigator', {
              screen: 'termScreen',
              params: {isReadOnly: true},
            })
          }>
          <Text style={styles.termsTxt}>Terms And Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default Onboarding;
