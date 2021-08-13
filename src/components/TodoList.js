import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

export default function TodoList({data, updateList}) {

  const handleDelteItem = (id)=>{
    const updatedList = data.filter(item => item.Id !== id);
    updateList(updatedList);
  }

  const handleUpdateItem = (updatedItem) =>{
    const updatedList = data.map(item => {
      if(item.Id === updatedItem.Id)
        return updatedItem;
      return item
    })
    updateList(updatedList);
  }

  return (
        <FlatList 
          data = {data} 
          renderItem = {({item})=> 
            <ListItem 
              item = {item}  
              handleDelteItem = {handleDelteItem}
              handleUpdateItem = {handleUpdateItem}
            />}
          keyExractor = {item  => item.Id}/>
  )
}

