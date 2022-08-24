import React from 'react';
import"./FormationsExperiences.css";
import dataFormations from '../datas/Formations';
import Formations from './Formations';
import dataExperiences from '../datas/Experiences';
import Experiences from './Experiences';


const FormationsExperiences = () => {
    return (
        <>
            <Formations datas={dataFormations}/>
            <Experiences datas={dataExperiences}/>
        </>
    )
};

export default FormationsExperiences;