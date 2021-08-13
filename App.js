/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React , {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {  NativeBaseProvider } from "native-base"
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import AddNewItm from './src/components/AddNewItm'
import data from './src/constants/data';
import TodoList from './src/components/TodoList';

const App = () =>{

  // const Stack = createStackNavigator();
  const partialData = data.filter((item , index) => index <= 10)
  const [list , setList] = useState(partialData);
  
  const getId = () =>{
    let maxId = 0;
   list.forEach(item => {
     if(item.Id > maxId)
      maxId = item.Id;
  });
  return maxId + 1;
}

  const getNewItem = (title) =>{
    const id = getId();
    let newItem = {
      UserId: 11,
      Id: id,
      Title: title,
      Completed : false,
     }
     return newItem;
  }

  const handleNewItem = (title) => {
    const newItem =  getNewItem(title);
    setList([newItem, ...list])
  }

  const updateList = (updatedList) =>{
    setList(updatedList);
  }

  return (
<NativeBaseProvider>
      <View flex={1}>
        <View style={{ height: 150,  }} >
          <AddNewItm handleAddNewItem = {handleNewItem}/>
        </View>
        <View style={{ flex: 6,  }} >
          <TodoList 
            data= {list}
            updateList = {updateList}
         />
        </View>
      </View>
    </NativeBaseProvider>

    // <View style={{ flex: 1 }}>
    //   <View style={{ height: 200, backgroundColor: 'powderblue' }} >
    //     <AddNewItm handleAddNewItem = {handleNewItem}/>
    //   </View>
    //   <View style={{ flex: 6, backgroundColor: 'steelblue' }} >
    //     <TodoList data= {list} />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
