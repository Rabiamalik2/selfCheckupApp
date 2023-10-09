import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {View, Text} from 'react-native';
import {TabNavRoutes} from '../../../screens/index.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RouteNames from '../../constants/route-names';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SosNavigation from './sosNavigation';
import SelfCheckNavigation from './selfCheck-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FunNavigation from './fun-navigation';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
const {tabNavRoutes, navigatorNames} = RouteNames;
const Tab = createBottomTabNavigator();
const screenOptions = {
  showIcon: true,
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarInactiveTintColor: Colors.purple,
  tabBarActiveTintColor: Colors.orange,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: responsiveHeight(10),
    background: Colors.white,
  },
};
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={navigatorNames.selfCheckNavigator}
        component={SelfCheckNavigation}
        options={{
          tabBarIcon: ({focused, tintColor, color}) => {
            focused = {focused};
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="clipboard-list"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(10)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(5),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}
                />
                <Text
                  style={{
                    color: Colors.purple,
                    fontSize: responsiveFontSize(1.3),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}>
                  Self Checkup
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={tabNavRoutes.vitalSignsScreen}
        component={TabNavRoutes.TabNavRoutes.VitalSignsScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome
                  name="heartbeat"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(11)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(5),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: responsiveFontSize(1.3),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}>
                  VitalSigns
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={navigatorNames.sosNavigator}
        component={SosNavigation}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  backgroundColor: Colors.red,
                  width: responsiveWidth(20),
                  height: responsiveHeight(9),
                  borderRadius: 23,
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: responsiveFontSize(4),
                    fontFamily: Fonts.poppinsExtraBold,
                    padding: 2,
                  }}>
                  S
                </Text>
                <Icon
                  name="call"
                  style={{
                    color: Colors.red,
                    fontSize: responsiveFontSize(2),
                    fontFamily: Fonts.poppinsExtraBold,
                    borderRadius: 20,
                    backgroundColor: Colors.white,
                    padding: 3,
                  }}></Icon>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: responsiveFontSize(4),
                    fontFamily: Fonts.poppinsExtraBold,
                    padding: 2,
                  }}>
                  S
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={tabNavRoutes.chatGptScreen}
        component={TabNavRoutes.TabNavRoutes.ChatGptScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialCommunityIcons
                  name="chat-plus"
                  height={responsiveHeight(5)}
                  width={responsiveWidth(10)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(5),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: responsiveFontSize(1.3),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}>
                  ChatGpt
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigatorNames.funNavigator}
        component={FunNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome
                  name="graduation-cap"
                  height={responsiveHeight(4)}
                  width={responsiveWidth(12)}
                  color={color}
                  style={{
                    fontSize: responsiveFontSize(5),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}
                />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: responsiveFontSize(1.3),
                    fontFamily: Fonts.poppinsExtraBold,
                  }}>
                  Edu
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
/*<Stack.Navigator screenOptions={options}>
        <Stack.Screen name={authRoutes.loginScreen} component={AuthRoutes.LoginScreen}/>
         <Stack.Screen name={authRoutes.registerScreen} component={AuthRoutes.RegisterScreen} />
        </Stack.Navigator> */
