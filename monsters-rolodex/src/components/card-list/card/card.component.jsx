import React from 'react';

import './card.styles.css';

export const Card = props => {
    return (
        <>
            <div className="card-container">
                <img alt="" src={`https://robohash.org/${props.monster.id}?set=set3&size=120x120`} />
                <h2>{props.monster.name}</h2>
                <label>{props.monster.email}</label>
            </div>
        </>
    );
}