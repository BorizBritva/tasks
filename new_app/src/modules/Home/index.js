import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import fone from '../../assest/body-fone.png';

/*const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <img src={fone} className="fone-img" />
                    <div className="wrap-home">
                        <div className="card home-card">
                            <h1 className="home-card__desc">The perfect news community made for everyone.</h1>
                            <button className="home-card__button"><Link to="/clients">View Clients</Link></button>
                        </div>
                </div>
            </div>
        </Fragment>
    );
}*/

export default class Home extends React.Component {

render() {
    return (
        <Fragment>
            <div className="container">
                <img alt="fone" src={fone} className="fone-img" />
                    <div className="wrap-home">
                        <div className="card home-card">
                            <h1 className="home-card__desc">The perfect news community made for everyone.</h1>
                            <button className="home-card__button"><Link to="/clients">View Clients</Link></button>
                        </div>
                </div>
            </div>
        </Fragment>
    );
}

};
