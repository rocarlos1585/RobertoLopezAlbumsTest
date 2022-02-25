import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

export const PhotoItem = ({photoProp}:any) => {
  return (
    <View style={styles.photoItemContainer}>
        <Image style={{flex:1}} source={{uri:photoProp.thumbnailUrl}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    photoItemContainer:{
        width:180,
        height:180,
        margin:10
    }
})
