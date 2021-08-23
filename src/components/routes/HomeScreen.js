
import React , {useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AddNewItm from '../AddNewItm'
import TodoList from '../TodoList';
import { connect } from 'react-redux';
import todoActions from './../../redux/actions/todoAction';
import { bindActionCreators } from 'redux';
import {Center, Spinner} from 'native-base';


const HomeScreen = (props) =>{
  
  const {todoList } = props;

  useEffect(() =>{
    if(todoList.length <= 0){
      props.loadData();
    }
  })
  
  return (
    <View flex={1}>
      <View style={{ height: 150,  }} >
        <AddNewItm addTodo = {props.addTodo}/>
      </View>
      <View style={{ flex: 6,  }} >
        {
          todoList.length <= 0  ? (
            <View style = {styles.spinnerContainer}>
              <Spinner/>
            </View>
          ) : 
        (<TodoList 
          data= {todoList}
          deleteTodo = {props.deleteTodo}
          updateTodo = {props.updateTodo}
       />)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) =>{
  console.log('state in HomeScreen: ', state);
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addTodo : bindActionCreators(todoActions.addTodo, dispatch),
    deleteTodo : bindActionCreators(todoActions.deleteTodo, dispatch),
    updateTodo : bindActionCreators(todoActions.updateTodo, dispatch),
    loadData: bindActionCreators(todoActions.loadData, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
