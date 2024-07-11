import axios from "axios";


const instance = axios.create({
    baseURL: 'https://proto-api.rplrus.com/api/',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});