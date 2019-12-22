import React from 'react';
import logo from '../assest/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-wrap">
                    <span>Grazie!</span>
                    <img src={logo} />
                </div>
            </div>
        </header>
    )
}

export default Header;
