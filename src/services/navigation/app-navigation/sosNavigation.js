import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes, SosNavRoutes, TabNavRoutes } from '../../../screens'
import RouteNames from '../../constants/route-names';
const { sosNavRoutes } = RouteNames
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const SosNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={sosNavRoutes.sosScreen} component={TabNavRoutes.SosScreen} />
        <Stack.Screen name={sosNavRoutes.emergencyContactScreen} component={SosNavRoutes.EmergencyContactScreen} />
        <Stack.Screen name={sosNavRoutes.addContactScreen} component={SosNavRoutes.AddContactScreen} />
        <Stack.Screen name={sosNavRoutes.contactAddedScreen} component={SosNavRoutes.ContactAddedScreen} />
        <Stack.Screen name={sosNavRoutes.personalInfoScreen} component={SosNavRoutes.PersonalInfoScreen} />
        </Stack.Navigator>
    );
}
export default SosNavigation