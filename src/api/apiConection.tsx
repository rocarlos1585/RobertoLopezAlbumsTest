import axios from "axios";

const albumsDB = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
})

export default albumsDB;