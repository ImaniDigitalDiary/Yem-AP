import axios from 'axios';

const axiosAPI = axios.create({
    baseURL : 'http://localhost:5003/api'
})


export default axiosAPI

