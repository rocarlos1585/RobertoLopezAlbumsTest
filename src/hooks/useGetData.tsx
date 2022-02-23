import { useEffect, useState } from "react";
import { Album } from "../interfaces/interfaces";
import getAlbum from '../api/apiConection';
import albumsDB from "../api/apiConection";


export const useGetData = () => {

    const [albums, setAlbums] = useState<Album[]>([]);
    

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getAlbums()
    }, []);



    const getAlbums = async () =>{
        const respAlbums = await albumsDB.get<Album[]>('/albums')

        setAlbums(respAlbums.data)
        
        setIsLoading(false)
        
    }

    return{
        albums,
        isLoading
    }

};
