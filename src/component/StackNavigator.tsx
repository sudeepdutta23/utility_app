import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Welcome from '../screens/Welcome';
import Register from '../screens/Registration/Register';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import {RegisterSuccess} from '../screens/Registration/RegisterSuccess';
import ForgotUser from '../screens/ForgotUser';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const options = {headerShown: false};
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} options={options} />
      <Stack.Screen name="welcome" component={Welcome} options={options} />
      <Stack.Screen name="register" component={Register} options={options} />
      <Stack.Screen
        name="registerSuccess"
        component={RegisterSuccess}
        options={options}
      />
      <Stack.Screen
        name="forgotUser"
        component={ForgotUser}
        options={options}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={options}
      />
      <Stack.Screen name="dashboard" component={Dashboard} options={options} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
