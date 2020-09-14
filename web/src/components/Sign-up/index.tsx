import React from 'react';
import registerIco from '../../assets/image/register.svg'

interface interfaceProp {
    SocialMedia: any;
}

const SignUp: React.FC<interfaceProp> = ({SocialMedia}) => {
    function screenSignUp(){
         document.body.className = 'sign-up';
         document.title = 'Sign up';
    };

    return (
        <div className="content second-content">
            <div className="first-column-sign-up">
                <h2 className="title first-title">Olá, seja bem-vindo!</h2>
                <img width="28%" src={registerIco} alt="" />
                <div>
                    <p className="description first-description">Crie a sua conta</p>
                    <p className="description first-description">e desfrute dos nossos serviços</p>
                </div>
                <button id="signup" onClick={screenSignUp} className="btn btn-enter">REGISTRAR</button>
            </div>
            <div className="secund-column">
                <h2 className="title second-title">Acessar sua conta</h2>
                <div className="form">
                    <p className="description second-description">Informe suas credenciais para iniciar a sessão</p>
                    <form>
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
                            <button type="submit" className="btn btn-register">ENTRAR</button>
                            <button type="button" onClick={screenSignUp} className="btn btn-register btn-mobile register">REGISTRAR</button>
                        </div>
                        <br />
                        <a className="forget-password" href="#">Esqueci a senha</a>
                    </form>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default SignUp;