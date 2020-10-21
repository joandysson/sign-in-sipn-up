import React from 'react';
import { FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';
import './style.css';

const iconWithLink = [
    {icon: <FaGoogle />, link: '#'},
    {icon: <FaFacebookF />, link: '#'},
    {icon: <FaLinkedinIn />, link: '#'},
];

function SocialMedia() {
    return (
        <div className="midia-social">
            <ul className="social-media-list">
            {iconWithLink.map((prop, key) => {
                return (
                    <li key={key} className="social-media-item">
                        <a href={prop.link}>{prop.icon}</a>
                    </li>
                );
            })}
            </ul>
        </div>
    )
}

export default SocialMedia;