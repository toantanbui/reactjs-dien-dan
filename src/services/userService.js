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

const handleGetDataOnePosts = (data) => {
    return axios.post('/api/get-posts', data)
}

const handleCreateDataComment1 = (data) => {
    return axios.post('/api/create-comment1', data)
}




export {
    handleGetDataLogin, handleGetDataSignup, handleGetDataLogout,
    handleGetDataOneUser, handleEditDataOneUser, handleCreateDataPosts,
    handleGetDataOnePosts, handleCreateDataComment1

}