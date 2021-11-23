import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import FormScreen from '../screens/FormScreen';

const Stack = createStackNavigator();

export const  Navigator = ()  => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );
}