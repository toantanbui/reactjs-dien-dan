import axios from 'axios';

// require('dotenv').config();

// import config from './config';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
    //     withCredentials: true
    // process.env.REACT_APP_BACKEND_URL
});
instance.interceptors.response.use(
    (response) => {
        // const { data } = response;
        return response.data
    }
)
export default instance;