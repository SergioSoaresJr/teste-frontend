import React from 'react';

import Ads_Desktop from '../../images/desktop/ads_desktop.png';

import './styles.css';

function Anuncio() {
    return (
        <div className="ads"> 
          
           <div className="ads-desktop">
                <small className="ads-desktop-title">Publicidade</small>
                <img className="ads-desktop-img" src={Ads_Desktop} />
            </div>
        </div>    
    );
} 

export default Anuncio;
