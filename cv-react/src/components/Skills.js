import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interests from './Interests';

const Skills = () => {
    return <>
        <div className="skills">
            <h2 className="h2">Informatique</h2>
            <Skill title="WORD" rating="5" />
            <Skill title="EXCEL" rating="5" />
            <Skill title="HTML" rating="5" />
            <Skill title="CSS" rating="4" />
            <Skill title="JAVASCRIPT" rating="4" />
            <Skill title="REACT" rating="3" />
        </div>
        <div className="skills">
            <h2 className="h2">Langues</h2>
            <Skill title="Anglais" rating="3" />
        </div>
        <Interests />
    </>
    
};

export default Skills;