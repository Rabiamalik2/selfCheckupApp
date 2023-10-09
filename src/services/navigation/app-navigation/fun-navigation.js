import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FunNavRoutes,TabNavRoutes } from '../../../screens/index.js'
import RouteNames from '../../constants/route-names';
const { funNavRoutes } = RouteNames
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const FunNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={funNavRoutes.funEduScreen} component={TabNavRoutes.TabNavRoutes.FunEduScreen} />
        <Stack.Screen name={funNavRoutes.healthEduScreen} component={FunNavRoutes.FunNavRoutes.HealthEduScreen} />
        <Stack.Screen name={funNavRoutes.liveActivityScreen} component={FunNavRoutes.FunNavRoutes.LiveActivityScreen} />
        <Stack.Screen name={funNavRoutes.yogaActivityScreen} component={FunNavRoutes.FunNavRoutes.YogaActivityScreen} />
        </Stack.Navigator>
    );
}
export default FunNavigation

/*
 <Stack.Screen name={sosNavRoutes.emergencyContactScreen} component={SosNavRoutes.EmergencyContactScreen} />
        <Stack.Screen name={sosNavRoutes.addContactScreen} component={SosNavRoutes.AddContactScreen} />
        <Stack.Screen name={sosNavRoutes.contactAddedScreen} component={SosNavRoutes.ContactAddedScreen} />
        <Stack.Screen name={sosNavRoutes.personalInfoScreen} component={SosNavRoutes.PersonalInfoScreen} />
        
        

        */