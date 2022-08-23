import React from 'react';

const Skill = ({ title, rating }) => {
    return (
        <div className="skill">
            <p className="skill_title">{title}</p>
            <div className="skill_rating">
                <div className={`circle ${rating > 0 && "circle-plain"}`}></div>
                <div className={`circle ${rating > 1 && "circle-plain"}`}></div>
                <div className={`circle ${rating > 2 && "circle-plain"}`}></div>
                <div className={`circle ${rating > 3 && "circle-plain"}`}></div>
                <div className={`circle ${rating > 4 && "circle-plain"}`}></div>
            </div>
        </div>
    )
}

export default Skill;