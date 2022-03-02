import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Album, albumItemProps } from '../interfaces/interfaces';


const albumIcon = require('../assets/icons/album-icon.png')

interface Props extends NativeStackScreenProps<any, any>{}

export const AlbumItem = ({id, title, navigation}:albumItemProps) => {

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('PhotosScreen', {id})} activeOpacity={0.7} style={styles.itemContainer}>
        
        <Image source={albumIcon}/>
        <Text style={styles.titleItem}>{title}</Text>
        
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    itemContainer:{
        width:190,
        borderRadius:10,
        backgroundColor:'transparent',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10
    },

    titleItem:{
      textAlign:'center',
      fontSize:16,
      fontWeight:"500",
      color:'white'
    }
})
