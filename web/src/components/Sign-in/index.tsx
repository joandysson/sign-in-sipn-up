import React from 'react';
import loignIco from '../../assets/image/login.svg'

interface interfaceProp {
    SocialMedia: any;
}

const SignIn: React.FC<interfaceProp> = ({SocialMedia}) => {

    function screenSignIn(){
        document.body.className = 'sign-in';
        document.title = 'Sign in';
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
                    <form>
                        <div className="input-block">
                            <label className="label-input">
                                <i className="far fa-user icone-input" ></i>
                                <input type="text" placeholder="Nome" />
                            </label>
                        </div>
                        <div className="input-block">
                            <label className="label-input">
                                <i className="far fa-envelope icone-input"></i>
                                <input type="email" placeholder="Email" />
                            </label>
                        </div>
                        <div className="input-block">
                            <label className="label-input">
                                <i className="fas fa-lock icone-input"></i>
                                <input type="password" placeholder="Senha" autoComplete="off" />
                            </label>
                        </div>
                        <div className="div-btn">
                            <button type="submit" className="btn btn-register">REGISTRAR</button>
                            <button type="button" onClick={screenSignIn} className="btn btn-register btn-mobile enter">ENTRAR</button>
                        </div>
                    </form>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default SignIn;