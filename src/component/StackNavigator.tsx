import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
