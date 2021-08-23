import actionTypes from '../actionTypes/todoActionTypes';
import axios from "axios";

const actions = {
    addTodo :(payload ) =>{
        return {type: actionTypes.ADD_TODO, payload} 
    },
    deleteTodo :(payload ) =>{
        return {type: actionTypes.DELETE_TODO, payload}
    },
    updateTodo :(payload ) =>{
        return {type: actionTypes.UPDATE_TODO, payload}
    },
    loadData : () => {
        return (dispatch) => {
            const response = axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
            console.log('data received !',response.data);
            dispatch({type: actionTypes.LOAD_TODO_DATA, payload: response.data})
            })
            
        }
    }
}

export default actions;