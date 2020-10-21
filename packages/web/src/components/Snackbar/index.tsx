import React from 'react';
import './style.css';

interface SnackBarProps {
    text: String;
}

export const SnackBar: React.FC<SnackBarProps> = ({ text }) => {
    return (
        <div id="snackbar">{['/', '/sign-in'].includes(document.location.pathname)? 'Dados informados são invalidos': text}</div>
    );
}

export const snackBarAtive = () => {
    const classSnack = ['/', '/sign-in'].includes(document.location.pathname)? "show left" : "show right";
    var snackbar: any;
    snackbar = document.getElementById("snackbar");
    snackbar.className = classSnack
    setTimeout(function () { snackbar.className = snackbar.className.replace(classSnack, ""); }, 3000);
}
