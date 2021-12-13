import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Call_Screen from '../screens/Call_Screen';

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
        <Stack.Screen name="Register" component={Register} />     
        <Stack.Screen name="Home" component={Home} />    
        <Stack.Screen name="Call_Screen" component={Call_Screen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

