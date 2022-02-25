import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { PhotoItem } from '../components/PhotoItem'
import { useGetPhotosByAlbum } from '../hooks/useGetPhotosByAlbum'

interface Props extends NativeStackScreenProps<any, any>{}

export const PhotosScreen = ({route, navigation}:Props) => {

    const {photos, isLoading} = useGetPhotosByAlbum(route.params?.id)

    const renderItem = ( {item}:any ) => (
        <PhotoItem photoProp={item}/>
        
        // <Image style={{width:200, height:200}} source={{uri:item.thumbnailUrl}}/>
    );
    
    if(isLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }
    
    return (
        <View style={{flex:1}}>

            <FlatList
                style={{backgroundColor:'#83ADB5', flex:1}}
                columnWrapperStyle={{justifyContent:'center'}}
                numColumns={2}
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item):any => item.id}
            />
           
        </View>
    )
}
