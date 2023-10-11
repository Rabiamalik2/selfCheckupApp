import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavRoutes, SelfCheckNavRoutes} from '../../../screens/index.js';
import RouteNames from '../../constants/route-names';
const {selfCheckNavRoutes} = RouteNames;
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
};
const SelfCheckNavigation = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name={selfCheckNavRoutes.selfCheckupScreen}
        component={TabNavRoutes.TabNavRoutes.SelfCheckupScreen}
      />
      <Stack.Screen
        name={selfCheckNavRoutes.questionScreen1}
        component={SelfCheckNavRoutes.SelfCheckNavRoutes.QuestionaireScreen1}
      />
    </Stack.Navigator>
  );
};
export default SelfCheckNavigation;
