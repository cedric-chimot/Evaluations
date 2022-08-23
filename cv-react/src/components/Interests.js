import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const Interests = () => {
    return (
        <div className="skills">
            <h2 className="h2">Centres d'intérêts</h2>
            <ul>
                <li><FontAwesomeIcon icon={faFilm} size="lg"/>Cinéma</li>
                <li><FontAwesomeIcon icon={faScroll} size="lg"/>Ecriture</li>
                <li><FontAwesomeIcon icon={faGamepad} size="lg"/>Jeux Vidéos</li>
            </ul>
        </div>
    )
}

export default Interests;