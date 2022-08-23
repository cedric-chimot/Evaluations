import React from 'react';
import './User.css';
import image from './images/Iman.jpg';

const user = () => {
    return (
        <div className="user">
            <img src={image} alt="photo-cedric" />
            <h1 className="user_name">Cédric Chimot</h1>
            <p className="profession">Développeur Web</p>
            <div className="user_infos">
                <p className="user_info">
                    9 rue des Rochettes <br></br>
                    02830 Saint Michel
                </p>
                <p className="user_info">
                    <a href="tel:+3306XXXXXXXX">06XXXXXXXX</a>
                </p>
                <p className="user_info">
                    <a href="mailto:cedric.chimot02@gmail.com">cedric.chimot02@gmail.com</a>
                </p>
                <p className="user_info">40 ans</p>
            </div>
        </div>
    );
};

export default user;