import React from 'react';
import './style.css';

interface SnackBarProps {
    text?: String;
}

export const SnackBar: React.FC<SnackBarProps> = ({ text }) => {
    return (
        <div id="snackbar">{text}</div>
    );
}

export const snackBarAtive = () => {
    var snackbar: any;
    snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
