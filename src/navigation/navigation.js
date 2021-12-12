import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
       screenOptions={{
        headerShown: false
      }}
      initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}