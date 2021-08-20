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
import { Provider as ReduxProvider } from 'react-redux';

import HomeScreen from './src/components/routes/HomeScreen';
import DetailScreen from './src/components/routes/DetailScreen';
import configureStore from './src/redux/store/store';
import initialState from './src/redux/initialState'

const App = () =>{

  const Stack = createStackNavigator();
  const store = configureStore(initialState)
  console.log('state in right after creations: ', store.getState());
  return (
    <ReduxProvider store = {store}>
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
    </ReduxProvider>

  );
}


export default App;
