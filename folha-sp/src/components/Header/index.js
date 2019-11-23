import React from 'react';

import Icon from '../../images/desktop/menu-icon.png'
import Logo from '../../images/desktop/logo.png'
import './styles.css';

function Header() {
    return (
        <header className="main-header"> 
                <img className="icon-menu" src={Icon} alt="Menu"/>
                
                <img className="logo-menu" src={Logo} alt="Folha"/>
                
                <p className="text-menu">Folha de São Paulo</p >

                <ul className="social-menu">
                    <li><a className="social-face" href="#"/></li>
                    <li><a className="social-twitter" href="#"/></li>
                </ul>
        </header>
    );
} 

export default Header;