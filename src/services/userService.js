import axios from '../axios';


const handleGetNewUsers = () => {
    return axios.get('/crud-get-new-user')
}




export {
    handleGetNewUsers,

}