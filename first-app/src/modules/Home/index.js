import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import fone from '../../assest/body-fone.png';

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <img src={fone} className="fone-img" />
                    <div className="wrap-home">
                        <div className="card home-card">
                            <div className="home-card__desc">The perfect news community made for everyone.</div>
                            <button className="home-card__button"><Link to="/clients">View Clients</Link></button>
                        </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
