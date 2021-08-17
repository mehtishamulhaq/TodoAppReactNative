import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

export default function TodoList({data, deleteTodo, updateTodo}) {

  

  return (
        <FlatList 
          data = {data} 
          renderItem = {({item})=> 
            <ListItem 
              item = {item}  
              deleteTodo = {deleteTodo}
              updateTodo = {updateTodo}
            />}
          keyExractor = {item  => item.Id}/>
  )
}

