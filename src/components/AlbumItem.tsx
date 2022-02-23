import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Album, albumItemProps } from '../interfaces/interfaces';


export const AlbumItem = ({id, title}:albumItemProps) => {
  return (
    <View style={styles.itemContainer}>
        <Text>{title}</Text>
        <Icon name="calendar" size={20} color='red' />
    </View>
  )
}


const styles = StyleSheet.create({
    itemContainer:{
        width:180,
        height:70,
        borderRadius:10,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:10
    }
})
