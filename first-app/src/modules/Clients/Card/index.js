import React, { Fragment } from 'react';

const Card = props => {

    const {client} = props;

    return (
        <div className="client">
            <div className="client__name"><span>{client.nickname}</span> says:</div>
            <p className="client__msg">"{client.message}"</p>
        </div>
    )
}

export default Card;
