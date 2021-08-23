


export const addTodo = (list, title) =>{
    const newItem =  getNewItem(list, title);
    return {todoList: [newItem, ...list]}
}

export const delteTodo = (list, id)=>{
    const updatedList = list.filter(item => item.id!== id);
    return {todoList: [...updatedList]}
  }

export const updateTodo = (list, updatedItem) =>{
  const updatedList = list.map(item => {
    if(item.id=== updatedItem.id)
      return updatedItem;
    return item
  })
  return {todoList: [...updatedList]}
}

/////////////////////////////////////////////
const getId = (list) =>{
    let maxId = 0;
   list.forEach(item => {
     if(item.id > maxId)
      maxId = item.id;
  });
  return maxId + 1;
}

const getNewItem = (list ,title) =>{
  const id = getId(list);
  let newItem = {
    userId: 11,
    id: id,
    title: title,
    completed : false,
   }
   return newItem;
}
