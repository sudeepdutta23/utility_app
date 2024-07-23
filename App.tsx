/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'darkgreen',
    // accent: '#f1c40f',
  },
};

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen
              name="login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
