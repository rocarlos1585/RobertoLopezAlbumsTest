import { useEffect, useState } from "react";
import {Photo } from "../interfaces/interfaces";
import getAlbum from '../api/apiConection';
import albumsDB from "../api/apiConection";


export const useGetPhotosByAlbum = (id:number) => {

    const [photos, setPhotos] = useState<Photo[]>([]);
    

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getPhotos()
    }, []);



    const getPhotos = async () =>{
        const respPhotos = await albumsDB.get<Photo[]>(`/albums/${id}/photos`)

        setPhotos(respPhotos.data)
        
        setIsLoading(false)
        
    }

    return{
        photos,
        isLoading
    }

};
