import axios, { AxiosInstance } from 'axios';
import { getCookies } from 'auth/utils/cookie';

// const token = getCookies().authorization

const api = (): AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:3333',
        headers: {'x-authorization': `bearer ${getCookies().authorization}`}
    });
}


export default api;