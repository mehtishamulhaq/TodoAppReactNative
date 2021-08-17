import { action } from 'commander';
import actionTypes from '../actionTypes/todoActionTypes';
import * as todoUtils from './../../utils/todoutils';
import data from '../../constants/data';

export default todoReducer = (state, action) => {
    let updatedState;
    switch(action.type){
        case actionTypes.ADD_TODO:
            updatedState = todoUtils.addTodo(state.todo, action.payload)
            return updatedState   
        case actionTypes.DELETE_TODO:
            updatedState = todoUtils.delteTodo(state.todo, action.payload)
            return updatedState
        case actionTypes.UPDATE_TODO:
            updatedState = todoUtils.updateTodo(state.todo, action.payload)
            return updatedState
        default:
            return state;
    }
}