import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default function DetailScreen(props) {
    const { route } = props;
    const {item} = route.params
    const backgroundColor = item.completed ? 'lightgreen': 'pink'; 
    const stausToDisplay = item.completed === true ? 'Completed' : 'Pending'
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.titleContainer} >
                <Text style = {styles.title}>{item.title}</Text> 
            </View>
            <View style = {{...styles.statusContainer, backgroundColor}}>
                <Text style = {styles.title}>{stausToDisplay}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
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
        flex: 1
    },
    title: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    }
  });