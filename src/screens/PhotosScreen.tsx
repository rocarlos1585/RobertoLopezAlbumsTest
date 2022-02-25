import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PhotoItem } from '../components/PhotoItem'
import { useGetPhotosByAlbum } from '../hooks/useGetPhotosByAlbum'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<any, any>{}

export const PhotosScreen = ({route, navigation}:Props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalPhoto, setModalPhoto] = useState('');
    

    const {photos, isLoading} = useGetPhotosByAlbum(route.params?.id)

    const click = (photoClicked:any) => {
        setModalVisible(true)
        setModalPhoto(photoClicked.url)
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

            {   modalVisible ? 
                        
                        <Modal
                          animationType="fade"
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                          }}
                        >
                          <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeButtonModal}>
                                    <Icon name="close-circle" size={30} color='#e66464' />
                                </TouchableOpacity>
                              
                                <Image style={{width:300, height:300, borderRadius:15}} source={{uri:modalPhoto}} />
                            </View>
                          </View>
                        </Modal>
                      
                    :null

            }
           
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
      backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        width:350,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },

    closeButtonModal:{
        alignSelf:'flex-end'
    }
  });