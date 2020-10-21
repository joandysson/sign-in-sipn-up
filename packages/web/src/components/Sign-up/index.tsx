import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loignIco from 'assets/image/login.svg'
import { singUp, verifyAuth } from 'auth/auth';
import { SnackBar, snackBarAtive } from '../Snackbar';


interface interfaceProp {
    SocialMedia: any;
}

interface dataSignUp extends HTMLElement {
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement
}

const SignIn: React.FC<interfaceProp> = ({SocialMedia}) => {

    const [messageSnack, setMessageSnack] = useState('');

    const history = useHistory();
    async function screenSignIn(){
        document.body.className = 'sign-in';
        document.title = 'Sign in';
        history.push('sign-in');

        if(await verifyAuth()) {
            return history.push('/dashboard');
        }
    }

    async function signUp(e: FormEvent) {
        e.preventDefault()
        const target = e.target as dataSignUp;

        const data = await singUp(
            target.name.value,
            target.email.value,
            target.password.value
        );

        data.email ? setMessageSnack('Usuário criado com sucesso'): setMessageSnack('Usuário já cadastrado');

        return snackBarAtive()
    }

    return (
        <div className="content first-content">
            <div className="first-column-sign-in">
                <h2 className="title first-title">Bem-vindo! &nbsp;<span className="to-vertical">: )</span></h2>
                <img width="28%" src={loignIco} alt="" />
                <div>
                    <p className="description first-description">Fique conectado com a gente</p>
                    <p className="description first-description">faça o login com suas informações</p>
                </div>
                <button id="signin" onClick={screenSignIn} className="btn btn-enter">ENTRAR</button>
            </div>
            <div className="secund-column">
                <h2 className="title second-title">Criar conta</h2>
                <div className="form">
                    <p className="description second-description">Informe os dados abaixo para criar a sua conta</p>
                    <form onSubmit={signUp} autoComplete="off">
                        <div className="input-block">
                            <label className="label-input">
                                <i className="far fa-user icone-input" ></i>
                                <input type="text" name="name" placeholder="Nome" required />
                            </label>
                        </div>
                        <div className="input-block">
                            <label className="label-input">
                                <i className="far fa-envelope icone-input"></i>
                                <input type="email" name="email" placeholder="E-mail" required />
                            </label>
                        </div>
                        <div className="input-block">
                            <label className="label-input">
                                <i className="fas fa-lock icone-input"></i>
                                <input type="password" name="password" placeholder="Senha" required />
                            </label>
                        </div>
                        <div className="div-btn">
                            <button type="submit" className="btn btn-register">REGISTRAR</button>
                            <button type="button" onClick={screenSignIn} className="btn btn-register btn-enter-mobile btn-mobile enter">ENTRAR</button>
                        </div>
                    </form>
                </div>
                <SocialMedia />
            </div>
            <SnackBar text={messageSnack}/>
        </div>
    );
}

export default SignIn;