import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="ema-jhon"/>
        </div>
    );
};

export default Header;