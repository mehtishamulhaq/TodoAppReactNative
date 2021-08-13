import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { HStack, Checkbox,SmallCloseIcon } from "native-base"
import { useNavigation } from '@react-navigation/native';

export default function ListItem({item, handleStatusChange, handleDelteItem, ...otherProps}) {
    const navigation = useNavigation();
    
    return (
        <View style  ={styles.listIemContainer}>
            <HStack alignItems="center" >
            {/* <Text >id = {item.Id}</Text>  */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                    isChecked={item.Completed}
                    onChange={() => handleStatusChange(item.Id)}
                    value={item.title}
                    accessibilityLabel = {item.Title}
                    defaultIsChecked = {item.Completed}
                    colorScheme = 'cyan'
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text 
                        style = {styles.title}
                        onPress = { () => navigation.navigate('Details' , {item: item})}
                    >
                        {item.Title}
                    </Text> 
                </View>
                <SmallCloseIcon color = 'lightgrey' onPress = {() => handleDelteItem(item.Id)}/>
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
