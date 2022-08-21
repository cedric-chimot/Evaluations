import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/Photo.jpg" alt="photo-profil" />
                    <h3>Cédric Chimot</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;