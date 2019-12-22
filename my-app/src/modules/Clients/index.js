import React from 'react';
import Card from './Card';
import clients from './clients.json';


const Clients = () => {
    return (
        <div>
            <h1>This is Clients Page</h1>
            { clients.map((client, index) => (
                <Card key={index} client={client} />
            ))}
        </div>
    );
}

export default Clients;
