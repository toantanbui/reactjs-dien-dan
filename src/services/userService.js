import axios from '../axios';


const handleGetDataLogin = (data) => {
    return axios.post('/api/login', data)
}

const handleGetDataSignup = (data) => {
    return axios.post('/api/sign-up', data)
}

const handleGetDataLogout = () => {
    return axios.get('/api/logout')
}

const handleGetDataOneUser = (data) => {
    return axios.get(`/api/get-one-user?id=${data.id}`)
}

const handleEditDataOneUser = (data) => {
    return axios.post('/api/edit-one-user', data)
}

const handleCreateDataPosts = (data) => {
    return axios.post('/api/create-posts', data)
}




export {
    handleGetDataLogin, handleGetDataSignup, handleGetDataLogout,
    handleGetDataOneUser, handleEditDataOneUser, handleCreateDataPosts

}