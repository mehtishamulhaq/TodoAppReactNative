import React, {useRef, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import todoActions from './../../redux/actions/todoAction';
import { HStack, Checkbox } from "native-base";
import {isEmpty} from 'lodash';
import { getInnerHTML } from 'domutils';


function DetailScreen(props) {

  
  
    const { route } = props;
    const {id, editMode} = route.params;
    const { todoList, deleteTodo, updateTodo} = props;
    const item = getCurrentItem();
    
    const backgroundColor = item.completed ? 'lightgreen': 'pink'; 
    const stausToDisplay = item.completed === true ? 'Completed' : 'Pending';
    const inputRef = useRef();

    const [text, setText]= useState(item.title);

    function getCurrentItem  () {
      let currItem = todoList.find(item => item.id == id);
      return currItem;
    }

    useEffect(()=>{
      if(inputRef && inputRef.current && editMode) 
            inputRef.current.focus();
      
  })

  const handleChange = (text) =>{
    setText(text);
    updateTodo({...item , title: text});
  }

    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.titleContainer} >
                <TextInput 
                        style = {styles.TextInput}
                        onChangeText={(text) => {handleChange(text)}}
                        ref = {inputRef}
                        defaultValue={item.title}
                        multiline = {true}
                        numberOfLines = {20}
                        textAlignVertical = "top"
                    /> 
                    <HStack alignItems="center" >
                      <View style={styles.checkboxContainer}>
                        <Checkbox
                            isChecked={item.completed}
                            onChange={() => updateTodo({...item , completed: !item.completed})}
                            value={item.title}
                            accessible={true}
                            accessibilityLabel={`${item.title}`}
                            defaultIsChecked = {item.completed}
                            colorScheme = 'cyan'
                        />
                      </View>
                      <View>
                        <Text style = {styles.title}>
                          Complete
                        </Text>
                      </View>
                    </HStack>
            </View>
            <View style = {{...styles.statusContainer, backgroundColor}}>
                <Text style = {styles.title}>{stausToDisplay}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  checkboxContainer:{
    marginLeft: 10,
  },
    mainContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-start',
      margin: 10,
    },
    status:{
        
    },
    statusContainer:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        width: '100%',
    },
    title: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    },
    TextInput: {
      backgroundColor: 'white',
      maxHeight: 250,
      width: '100%',
      borderRadius: 5,
      marginRight: 10,
      borderColor: 'grey',
      borderWidth: 2,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
  },
  });

  const mapStateToProps = (state) =>{
    return {
      todoList: state.todoList
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
      deleteTodo : bindActionCreators(todoActions.deleteTodo, dispatch),
      updateTodo : bindActionCreators(todoActions.updateTodo, dispatch),
    }
  }
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);