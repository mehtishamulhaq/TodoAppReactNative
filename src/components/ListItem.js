import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
import { HStack, Checkbox } from "native-base";
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ListItem({item, deleteTodo, updateTodo}) {
    const navigation = useNavigation();

    return (
        <View style  ={styles.listIemContainer}>
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
                <View style={styles.textContainer}>   
                    <Text 
                        style = {styles.title}
                        onPress = { () => navigation.navigate('Details' , {id: item.id})}>
                            {item.title}
                    </Text> 
                </View>
                <EntypoIcon name="edit" size={20} color="lightgrey" onPress = { () => navigation.navigate('Details' , {id: item.id, editMode: true})}/>
                <MaterialIcons name="delete" size={30} color="lightgrey" onPress = {() => deleteTodo(item.id)}/>
                {/* <EntypoIcon name="cross" size={30} color="lightgrey" /> */}
                {/* <MaterialIcons name="delete-outline" size={30} color="lightgrey" onPress = {() => handleDelteItem(item.id)}/> */}
            </HStack>
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer:{
        marginLeft: 10,
        
    },
    listIemContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin: 5,
        borderRadius: 5,
    },
    textContainer:{
        flex: 1,
    },
    title: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  });
