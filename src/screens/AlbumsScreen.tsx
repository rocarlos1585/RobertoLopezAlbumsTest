import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AlbumItem } from '../components/AlbumItem';
import { useGetData } from '../hooks/useGetData';
import { Album } from '../interfaces/interfaces';

interface Props extends NativeStackScreenProps<any, any>{}


export const AlbumsScreen = ({route, navigation}:Props) => {
    
    const {albums} = useGetData()

    const renderItem = ( {item}:any ) => (
        <AlbumItem navigation={navigation} id={item.id} title={item.title}/>
      );


  return (
    <View style={styles.albumsContainer}>

        
            <FlatList
                style={{backgroundColor:'#83ADB5', flex:1}}
                columnWrapperStyle={{justifyContent:'space-between'}}
                numColumns={2}
                data={albums}
                renderItem={renderItem}
                keyExtractor={(item):any => item.id}
            />
        

    </View>
  )
}

const styles = StyleSheet.create({

    albumsContainer:{
        flex:1,

    }
    
})
