import api from "services/api";
import { getCookies, saveCookie } from "./utils/cookie";

export async function singIn(email:string, password:string) {

    try {
        const response = await api().post('api/v1/login', {email, password})
        if(response.status === 200) {
            saveCookie('authorization', response.headers?.['x-authorization']);

            return response?.data;
        }

        throw new Error('error at authetication');

    } catch (error) {
        console.error(error.message);
        return
    }
}

export async function singUp(name: string, email: string, password: string) {
    try {
        const response = await api().post('api/v1/register', {name, email, password})
        return response.data;
    } catch (error) {
        console.error(error.message);
        return false
    }
}

export async function verifyAuth(){
    const cookies = getCookies();
    try {
        const response = await api().post('api/v1/refreshtoken', {token: `bearer ${cookies.authorization}`});
        if(response.status) {
            saveCookie('authorization', response.headers?.['x-authorization']);
            return true;
        }
    } catch (error) {
        return false;
    }
}

export async function logout(){
    try {
        const response = await api().delete('api/v1/logout');
        if(response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error.message);
        return false;
    }
}