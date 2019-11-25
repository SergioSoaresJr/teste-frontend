import React from 'react';

import Logo from '../../images/mobile/arrow_top-icon.png'
import './styles.css';
import Header from '../Header';

function Voltar_Top () {
    return (
        <div className="voltar-top">
            <a href='#header' ><span>voltar ao top</span>
                <img className="voltar-img" src={Logo} alt="Logo-Rada-Pé"/>
            </a>
        </div>
    ); 
}

export default Voltar_Top;