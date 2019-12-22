import React from 'react';

const Card = props => {
    const { client } = props;
    return (
        <p>{ client }</p>
    );
};

export default Card;
