import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteNames from '../constants/route-names';
import AppNavigation from './app-navigation/app-navigation';
import AuthNavigation from './auth-navigation/auth-navigation';
import TabNavigation from './app-navigation/tab-navigation';
import SosNavigation from './app-navigation/sosNavigation';
import FunNavigation from './app-navigation/fun-navigation';
import SelfCheckNavigation from './app-navigation/selfCheck-navigation';
const {navigatorNames} = RouteNames;
const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
    
        initialRouteName= { navigatorNames.authNavigator }
        screenOptions={options}>
        <Stack.Screen
          name={navigatorNames.tabNavigator}
          component={TabNavigation}
        />
        <Stack.Screen
          name={navigatorNames.appNavigator}
          component={AppNavigation}
        />
        <Stack.Screen
          name={navigatorNames.authNavigator}
          component={AuthNavigation}
        />
        <Stack.Screen
          name={navigatorNames.sosNavigator}
          component={SosNavigation}
        />
        <Stack.Screen
          name={navigatorNames.selfCheckNavigator}
          component={SelfCheckNavigation}
        />
        <Stack.Screen
          name={navigatorNames.funNavigator}
          component={FunNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
