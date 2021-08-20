
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
  
  return (
    <View flex={1}>
      <View style={{ height: 150,  }} >
        <AddNewItm addTodo = {props.addTodo}/>
      </View>
      <View style={{ flex: 6,  }} >
        <TodoList 
          data= {todoList}
          deleteTodo = {props.deleteTodo}
          updateTodo = {props.updateTodo}

       />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
