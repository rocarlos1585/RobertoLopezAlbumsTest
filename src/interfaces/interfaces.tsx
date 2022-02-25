export interface Album {
    userId: number;
    id:     number;
    title:  string;
}

export interface albumItemProps{
    id:number,
    title:string,
    navigation:any
}

export interface Photo{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
