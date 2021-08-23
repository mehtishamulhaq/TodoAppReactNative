import { action } from 'commander';
import actionTypes from '../actionTypes/todoActionTypes';
import * as todoUtils from './../../utils/todoutils';
import initialState from '../initialState';

export default todoReducer = (state = initialState.todoList, action) => {
    console.log('state in reducer: ', state);
    let updatedState;
    switch(action.type){
        case actionTypes.ADD_TODO:
            updatedState = todoUtils.addTodo(state.todoList, action.payload)
            return updatedState   
        case actionTypes.DELETE_TODO:
            updatedState = todoUtils.delteTodo(state.todoList, action.payload)
            return updatedState
        case actionTypes.UPDATE_TODO:
            updatedState = todoUtils.updateTodo(state.todoList, action.payload)
            return updatedState
        case actionTypes.LOAD_TODO_DATA:
            updatedState = {todoList: action.payload};
            return updatedState;
        default:
            return state;
    }
}