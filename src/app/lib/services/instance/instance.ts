import axios from "axios";


const instance = axios.create({
    baseURL: 'https://proto-api.rplrus.com/api/',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer 8|HxhHAyueBGwzY30UJacn6jwVQk8Vh1oheDN6JTJj77239076"
    }
});

export default instance;