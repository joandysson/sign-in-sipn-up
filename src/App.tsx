import React from 'react';
import SignIn from './components/Sign-in';
import SignUp from './components/Sign-up';
import SocialMedia from './components/Social-media';
import './assets/css/style.css'
import { SnackBar }  from './components/Snackbar';

function App() {
  return (
    <div className="container">
      <SignIn SocialMedia={SocialMedia} />
      <SignUp SocialMedia={SocialMedia} />
      <SnackBar text="Bem Vindo"/>
    </div>
  );
}

export default App;
