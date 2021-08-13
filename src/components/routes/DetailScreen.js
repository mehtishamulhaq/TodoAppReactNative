import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { flex, justifyContent } from 'styled-system';

export default function DetailScreen(props) {
    const { route } = props;
    const {item} = route.params
    console.log(item)
    return (
        <View style = {styles.mainContainer}>
           <Text style = {styles.title}>{item.Title}</Text> 
           
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    }
  });