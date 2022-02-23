import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AlbumItem } from '../components/AlbumItem';
import { useGetData } from '../hooks/useGetData';
import { Album } from '../interfaces/interfaces';


export const AlbumsScreen = () => {
    
    const {albums} = useGetData()

    const renderItem = ( {item}:any ) => (
        <AlbumItem id={item.id} title={item.title}/>
      );


  return (
    <View style={styles.albumsContainer}>

        <ScrollView >
            <FlatList
                style={{backgroundColor:'red', flex:1}}
                contentContainerStyle={{justifyContent:'space-around'}}
                numColumns={2}
                data={albums}
                renderItem={renderItem}
                keyExtractor={(item):any => item.id}
                
            />
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

    albumsContainer:{
        flex:1,

    }
    
})
