import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import clients from './clients.json';

const Clients = () => {
    return (
        <div className='container'>
            <div className='clients-wrap'>
                <Link to="/">Back to Home</Link>
                <p>Most recent news from our users</p>
            </div>
            <ul className='clients-list'>
            {
                clients.map((client, index) => (
                    <li key={index} className='clients-list__msg'>
                        <Card nickname={client.nickname} message={client.message} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Clients;
