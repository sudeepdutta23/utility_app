import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account/Account';
import Billing from '../screens/Billing/Billing';
import Usage from '../screens/Usage/Usage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Icons = ({specs, name}: any) => (
  <Ionicons size={specs.size + 5} color={specs.color} name={name} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'darkgreen',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: specs => <Icons specs={specs} name="home" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: specs => <Icons specs={specs} name="person" />,
        }}
      />
      <Tab.Screen
        name="Billing"
        component={Billing}
        options={{
          headerShown: false,
          tabBarIcon: specs => <Icons specs={specs} name="briefcase" />,
        }}
      />
      <Tab.Screen
        name="Usage"
        component={Usage}
        options={{
          headerShown: false,
          tabBarIcon: specs => <Icons specs={specs} name="bar-chart" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
