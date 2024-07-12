import axios from "axios";


const instance = axios.create({
    baseURL: 'https://proto-api.rplrus.com/api/',
});

export default instance