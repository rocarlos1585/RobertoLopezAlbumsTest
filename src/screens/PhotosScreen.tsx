import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ActivityIndicator, Alert, FlatList, Image, Text, View } from 'react-native'
import { PhotoItem } from '../components/PhotoItem'
import { useGetPhotosByAlbum } from '../hooks/useGetPhotosByAlbum'

interface Props extends NativeStackScreenProps<any, any>{}

export const PhotosScreen = ({route, navigation}:Props) => {

    const {photos, isLoading} = useGetPhotosByAlbum(route.params?.id)

    const click = (photoClicked:any) => {
        Alert.alert(photoClicked.title)
    }

    const renderItem = ( {item}:any ) => (
        <PhotoItem onPress={click} photoProp={item}/>
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
                style={{backgroundColor:'#764c6e', flex:1}}
                columnWrapperStyle={{justifyContent:'center'}}
                numColumns={2}
                data={photos}
                renderItem={renderItem}
                keyExtractor={(item):any => item.id}
            />
           
        </View>
    )
}
