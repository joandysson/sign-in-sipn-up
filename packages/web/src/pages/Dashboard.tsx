import React from 'react';
import '../assets/css/global.css'
import '../assets/css/dashboard.css'
import { logout } from '../auth/auth';
import { useHistory } from 'react-router-dom';


export default function Dashboard() {
    const history = useHistory();
    async function btnlogout() {
        if(await logout()) history.push('/sign-in')
    }

    return (
        <div>
            <h1>Olá, seja bem vindo!</h1>
            <button onClick={btnlogout} className="logout" >Logout</button>
        </div>
    )
}