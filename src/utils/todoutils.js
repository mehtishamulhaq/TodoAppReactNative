


export const addTodo = (list, title) =>{
    const newItem =  getNewItem(list, title);
    return {todo: [newItem, ...list]}
}

export const delteTodo = (list, id)=>{
    const updatedList = list.filter(item => item.Id !== id);
    return {todo: [...updatedList]}
  }

export const updateTodo = (list, updatedItem) =>{
  const updatedList = list.map(item => {
    if(item.Id === updatedItem.Id)
      return updatedItem;
    return item
  })
  return {todo: [...updatedList]}
}

/////////////////////////////////////////////
const getId = (list) =>{
    let maxId = 0;
   list.forEach(item => {
     if(item.Id > maxId)
      maxId = item.Id;
  });
  return maxId + 1;
}

const getNewItem = (list ,title) =>{
  const id = getId(list);
  let newItem = {
    UserId: 11,
    Id: id,
    Title: title,
    Completed : false,
   }
   return newItem;
}
