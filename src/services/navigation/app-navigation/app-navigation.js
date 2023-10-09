import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from '../../../screens'
import RouteNames from '../../constants/route-names';
const { appRoutes } = RouteNames
const Stack = createNativeStackNavigator();
const options = {
    headerShown: false
}
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={appRoutes.homeScreen} component={AppRoutes.AppRoutes.HomeScreen} />
            <Stack.Screen name={appRoutes.dashboardScreen} component={AppRoutes.AppRoutes.DashboardScreen} />
            <Stack.Screen name={appRoutes.doctorInfoScreen} component={AppRoutes.AppRoutes.DoctorInfoScreen} />
            <Stack.Screen name={appRoutes.medicoreInfoScreen} component={AppRoutes.AppRoutes.MedicoreInfoScreen} />
            <Stack.Screen name={appRoutes.settingScreen} component={AppRoutes.AppRoutes.SettingScreen} />
        </Stack.Navigator>
    );
}
export default AppNavigation