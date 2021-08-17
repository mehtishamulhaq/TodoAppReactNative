import actionTypes from '../actionTypes/todoActionTypes';

const actions = {
    addTodo :(payload ) =>{
        return {type: actionTypes.ADD_TODO, payload} 
    },
    deleteTodo :(payload ) =>{
        return {type: actionTypes.DELETE_TODO, payload}
    },
    updateTodo :(payload ) =>{
        return {type: actionTypes.UPDATE_TODO, payload}
    }
}

export default actions;