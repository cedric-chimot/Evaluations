import React from 'react';

const Formations = ({ datas }) => {
    return (
        <div className="cursus mb3">
            <h2 className="h2">Formations</h2>
            {datas.map(item => (
                <div className="grid_row" key={item.id}>
                    <div className="grid_item">
                        <p className="grid_date">{item.date}</p>
                    </div>
                    <div className="grid_item">
                        <h3 className="grid_title">{item.title}</h3>
                        <p className="grid_location">{item.location}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Formations;