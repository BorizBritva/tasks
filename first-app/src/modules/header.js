import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container header-wrap">
                <div className="logo-desc">Grazie!</div>
                <Link to="/"><img className="logo" src={logo} /></Link>
            </div>
        </header>
    )
}

export default Header;
