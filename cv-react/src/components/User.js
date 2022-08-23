import React from 'react';
import './User.css';
import image from './images/Iman.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const user = () => {
    return (
        <div className="user">
            <img src={image} alt="photo-cedric" className='user_avatar' />
            <h1 className="user_name">Cédric Chimot</h1>
            <p className="profession">Développeur Web</p>
            <div className="user_infos">
                <p className="user_info">
                    <FontAwesomeIcon icon={faMap} size="lg" />9 rue des Rochettes
                    02830 Saint Michel
                </p>
                <p className="user_info">
                    <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                    <a href="tel:+330619922066">06/19/92/20/66</a>
                </p>
                <p className="user_info">
                    <FontAwesomeIcon icon={faAt} size="lg" />
                    <a href="mailto:cedric.chimot02@gmail.com">cedric.chimot02@gmail.com</a>
                </p>
                <p className="user_info">
                    <FontAwesomeIcon icon={faCalendarDays} size="lg" />40 ans
                </p>
            </div>
        </div>
    );
};

export default user;