import React, {setState, Component} from 'react'
import { responsiveHeight,responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { View, Text, StyleSheet,Image,TouchableOpacity,TouchableHighlight } from 'react-native';
import {AppRoutes, TabNavRoutes,SelfCheckNavRoutes } from '../../../screens'
import Icon from 'react-native-vector-icons/MaterialIcons';
import RouteNames from '../../constants/route-names';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SosNavigation from './sosNavigation';
import SelfCheckNavigation from './selfCheck-navigation';
import CheckUp from 'react-native-vector-icons/MaterialCommunityIcons';
import Chat from 'react-native-vector-icons/MaterialCommunityIcons';
import VitalSign from 'react-native-vector-icons/FontAwesome';
import Fun from 'react-native-vector-icons/FontAwesome';
import FunNavigation from './fun-navigation';
const { tabNavRoutes, navigatorNames } = RouteNames
const Tab = createBottomTabNavigator();
const screenOptions = {
    showIcon:true,
    tabBarShowLabel:false,
    headerShown: false,
    tabBarInactiveTintColor: '#33295D',
    tabBarActiveTintColor: '#FF8845',
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:responsiveHeight(10),
        background:'white',
    
    }
}
const TabNavigation = () => {
   
   
    return (
  
            <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen  
            name={navigatorNames.selfCheckNavigator} 
            component={SelfCheckNavigation}
            options={{
                
                tabBarIcon:({focused,tintColor,color})=>{
                    focused = {focused}
                    return( 
                      
                        <View style={{alignItems:'center', justifyContent:'center' }}  >
                        <CheckUp  name='clipboard-list' 
                        height= {responsiveHeight(5)} width= {responsiveWidth(10)} 
                         color={color} style={{ fontSize:responsiveFontSize(5), fontWeight:'bold'}}/>
                        <Text style={{color: '#33295d', fontSize:responsiveFontSize(1.3), fontWeight:'bold'}}>Self Checkup</Text>
                        </View>
                       
                )}      
            }}   />
            <Tab.Screen  name={tabNavRoutes.vitalSignsScreen} 
                component={TabNavRoutes.VitalSignsScreen} 
                options={{
                tabBarIcon:({focused,color})=>{
                    return( 
                        <View style={{alignItems:'center', justifyContent:'center'}} >
                        <VitalSign  name='heartbeat' 
                        height= {responsiveHeight(5)} width= {responsiveWidth(11)} 
                         color={color} style={{ fontSize:responsiveFontSize(5), fontWeight:'bold'}}/>
                        <Text style={{color: 'black', fontSize:responsiveFontSize(1.3), fontWeight:'bold'}}>VitalSigns</Text>
                        </View>
                )}      
            }} />
            
             <Tab.Screen   name={navigatorNames.sosNavigator} component={SosNavigation}
                options={{
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row',
                        backgroundColor:'red', 
                        width:  responsiveWidth(20),
                        height: responsiveHeight(9),
                        borderRadius:23,
                       }} >
                        <Text style={{color: '#fff', fontSize:responsiveFontSize(4), fontWeight:'bold', padding:2}}>S</Text>
                        <Icon name='call' style={{color: 'red', fontSize:responsiveFontSize(2), fontWeight:'bold',borderRadius:20, backgroundColor:'#fff',padding:3}}></Icon>
                        <Text style={{color: '#fff', fontSize:responsiveFontSize(4), fontWeight:'bold', padding:2}}>S</Text>
                        </View>
                )}      
            }}
            />
            <Tab.Screen  name={tabNavRoutes.chatGptScreen}     component={TabNavRoutes.ChatGptScreen} 
                  options={{
                tabBarIcon:({focused, color})=>{
                    return( 
                        <View style={{alignItems:'center', justifyContent:'center'}} >
                         <Chat  name='chat-plus' 
                        height= {responsiveHeight(5)} width= {responsiveWidth(10)} 
                         color={color} style={{ fontSize:responsiveFontSize(5), fontWeight:'bold'}}/>
                        <Text style={{color: 'black', fontSize:responsiveFontSize(1.3), fontWeight:'bold'}}>ChatGpt</Text>
                        </View>
                )}      
            }}/>
            <Tab.Screen  name={navigatorNames.funNavigator}      component={FunNavigation} 
                  options={{
                tabBarIcon:({focused,color,size})=>{
                    return( 
                        <View style={{alignItems:'center', justifyContent:'center',}} >
                         <Fun  name='graduation-cap' 
                        height= {responsiveHeight(4)} width= {responsiveWidth(12)} 
                         color={color} style={{ fontSize:responsiveFontSize(5), fontWeight:'bold'}}/>
                        <Text style={{color: 'black', fontSize:responsiveFontSize(1.3), fontWeight:'bold'}}>Edu</Text>
                        </View>
                )}      
            }}
            />
            
            </Tab.Navigator>
    );
}
export default TabNavigation
/*<Stack.Navigator screenOptions={options}>
        <Stack.Screen name={authRoutes.loginScreen} component={AuthRoutes.LoginScreen}/>
         <Stack.Screen name={authRoutes.registerScreen} component={AuthRoutes.RegisterScreen} />
        </Stack.Navigator> */