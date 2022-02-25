import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const PhotoItem = ({photoProp, onPress}:any) => {
  return (
    <TouchableOpacity onPress={()=>onPress(photoProp)} activeOpacity={0.7} style={styles.photoItemContainer}>
        <Image style={{flex:1, borderRadius:15}} source={{uri:photoProp.thumbnailUrl}}/>
        <LinearGradient 
            colors={[ 'rgba(131, 173, 181, 0.8)', 'rgba(255, 255, 255, 0.4)']}
            start={{x: 0, y:1}} end={{x: 1, y: 0}}
            locations={[0.3,0.7]}
            style={styles.gradientContainer}>
            <Text style={styles.photoTitle}>{photoProp.title}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    photoItemContainer:{
        width:180,
        height:180,
        margin:10,
        borderRadius:15,
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.5)'
    },

    gradientContainer:{
        flex:1,
        width:180,
        height:60,
        position:'absolute',
        bottom:0,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
        
    },

    photoTitle:{
        fontWeight:'bold',
        textAlign:'center'
    }
})
