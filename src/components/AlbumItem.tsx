import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Album, albumItemProps } from '../interfaces/interfaces';

interface Props extends NativeStackScreenProps<any, any>{}

export const AlbumItem = ({id, title, navigation}:albumItemProps) => {

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('PhotosScreen', {id})} activeOpacity={0.7} style={styles.itemContainer}>
        <Text>{title}</Text>
        <Icon name="calendar" size={20} color='red' />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    itemContainer:{
        width:190,
        height:70,
        borderRadius:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        
        marginVertical:10
    }
})
