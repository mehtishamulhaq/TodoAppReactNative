import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
import { HStack, Checkbox } from "native-base"
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ListItem({item, handleDelteItem, handleUpdateItem}) {
    const navigation = useNavigation();
    const [editMode, setEditMode]= useState(false);
    const [text, setText]= useState(item.Title);

    const inputRef = useRef();

    const handleEditText = () =>{
        setEditMode(true); 
        console.log(inputRef);
        if(inputRef && inputRef.current) 
            inputRef.current.focus();
    }

    return (
        <View style  ={styles.listIemContainer}>
            <HStack alignItems="center" >
                <View style={styles.checkboxContainer}>
                    <Checkbox
                    isChecked={item.Completed}
                    onChange={() => handleUpdateItem({...item , Completed: !item.Completed})}
                    value={item.title}
                    accessibilityLabel = {item.Title}
                    defaultIsChecked = {item.Completed}
                    colorScheme = 'cyan'
                    />
                </View>
                <View style={styles.textContainer}>
                    {editMode ? 
                    (<TextInput 
                        style = {styles.title}
                        onChangeText={(text) => setText(text)}
                        onSubmitEditing = {() => handleUpdateItem({...item , Title: text})}
                        ref = {inputRef}
                        defaultValue={item.Title}
                    />  
                    ): 
                    (<Text 
                        style = {styles.title}
                        onPress = { () => navigation.navigate('Details' , {item: item})}>
                            {item.Title}
                    </Text> 
                    )}
                    
                </View>
                <EntypoIcon name="edit" size={20} color="lightgrey" onPress = {handleEditText}/>
                {/* <EntypoIcon name="cross" size={30} color="lightgrey" /> */}
                <MaterialIcons name="delete" size={30} color="lightgrey" onPress = {() => handleDelteItem(item.Id)}/>
                {/* <MaterialIcons name="delete-outline" size={30} color="lightgrey" onPress = {() => handleDelteItem(item.Id)}/> */}
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
