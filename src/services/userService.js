import axios from '../axios';


const handleGetDataLogin = (data) => {
    return axios.post('/api/login', data)
}

const handleGetDataSignup = (data) => {
    return axios.post('/api/sign-up', data)
}




export {
    handleGetDataLogin, handleGetDataSignup

}