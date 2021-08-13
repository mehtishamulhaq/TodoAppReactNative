import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

export default function TodoList({data, updateList}) {


  const handleStatusChange = (id) => {
    const updatedList = data.map(item => {
      if(item.Id === id)
        return {...item, Completed: !item.Completed}
      return item
    })
    updateList(updatedList);
  }

  const handleDelteItem = (id)=>{
    const updatedList = data.filter(item => item.Id !== id);
    updateList(updatedList);
  }

  return (
        <FlatList 
          data = {data} 
          renderItem = {({item})=> 
            <ListItem 
              item = {item}  
              handleStatusChange = {handleStatusChange} 
              handleDelteItem = {handleDelteItem}
            />}
          keyExractor = {item  => item.Id}/>
  )
}

