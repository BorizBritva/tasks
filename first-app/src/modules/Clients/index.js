import React, { Fragment } from 'react';
import Header from '../header.js';
import Card from './Card';
import { Link } from 'react-router-dom';
import fone from '../../assest/body-fone.png';
import toHome from '../../assest/back-to-home.png';
import clients from './clients.json';

const Clients = () => {
    return (
        <Fragment>
            <div className="container">
                <img src={fone} className="fone-img" />
                <div className="clients-wrap">
                    <div className="to-home">
                        <Link className="to-home__button" to='/'><img src={toHome} /></Link>
                        <div className="to-home__desc">Most recent news from our users</div>
                    </div>
                    <ul className="clients-list">
                        {clients.map((client, index) => (
                            <li>
                                <Card key={index} client={client} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Clients;
