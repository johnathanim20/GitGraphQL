import React from 'react'
import Home from './screens/Home.js'
import {Profile} from './screens/Profile.js'
import {Repository} from './screens/Repository.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const myStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home} option = {{ title: 'Home'}} />
        <Stack.Screen name = "Profile" component = {Profile }/>
        <Stack.Screen name = "Repository" component = {Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default myStack;