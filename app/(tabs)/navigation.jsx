// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import explore from '../SignupScreen';
import index from '../LoginScreen';
// import HomeScreen from '../HomeScreen';

// import LoginScreen from './index';
// import SignupScreen from './explore';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">

        <Stack.Screen
          name="index"
          component={explore}
        />

        <Stack.Screen
          name="Signup"
          component={explore}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Section"
          component={SectionScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}