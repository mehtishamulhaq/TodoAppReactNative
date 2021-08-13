import React , {useState} from 'react';
import {View , TextInput, Text, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import { borderColor } from 'styled-system';

export default function AddNewItm({handleAddNewItem}) {
    const [text, setText] = useState('');
    const addNewItem = () => {
        debugger;
        console.log(text , text.length)
        if(text.length > 0){
            handleAddNewItem(text);
            setText('');
        }
    }
    return (
        <View style = {styles.neWItemContainer}>
            <TextInput 
                style={styles.TextInput}
                placeholder="Add New Item"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />

            <TouchableWithoutFeedback onPress = {addNewItem} >
                <View style = {styles.addButton}>
                <Text style = {styles.buttonText}>Add</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    neWItemContainer:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'whitesmoke',
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginBottom: 10,
        
    },
    TextInput: {
        backgroundColor: 'white',
        height: 40,
        width: 250,
        borderRadius: 5,
        marginRight: 10,
        borderRightColor: 'grey',
        borderWidth: 2,
    },
    addButton: {
        width: 80,
        height: 40,
        marginLeft: 10,
        backgroundColor: 'darkcyan',
        // opacity: 0.8,
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    }
})
