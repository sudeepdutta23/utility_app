/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useReducer } from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './src/component/BottomNavigator';
import { LoginReducer } from './src/context/login/LoginReducer';
import { initialValues, LoginContextProvider } from './src/context/login/LoginContext';
import StackNavigator from './src/component/StackNavigator';

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

  const [state, dispatch] = useReducer(LoginReducer, initialValues);

  return (
    <PaperProvider theme={theme}>
      <LoginContextProvider.Provider value={{ state, dispatch }}>
        <NavigationContainer>
          {!state?.isLoggedIn ? <StackNavigator /> :
            <BottomTabNavigator />}
        </NavigationContainer>
      </LoginContextProvider.Provider>
    </PaperProvider>
  );
}

export default App;
