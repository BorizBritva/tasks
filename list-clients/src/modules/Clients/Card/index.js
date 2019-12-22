import React from 'react';

const Card = props => {

    return (
        <div className='card'>
            <div className='card__nick'>{props.nickname} says:</div>
            <p className='card__msg'>{props.message}</p>
        </div>
    );
};

export default Card;
