/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React  from 'react';



import {  NativeBaseProvider } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/routes/HomeScreen'
import DetailScreen from './src/components/routes/DetailScreen'

const App = () =>{

  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Todo App' }}
          />
          <Stack.Screen 
            name="Details" 
            component={DetailScreen} 
            options={{ title: 'Task Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}


export default App;
