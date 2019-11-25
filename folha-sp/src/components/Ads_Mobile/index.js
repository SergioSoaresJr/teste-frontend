import React from 'react';

import ADS from '../../images/mobile/ads_mobile.png';

import './styles.css';

function Ads_Mobile() {
    return (
        <div className="anuncio-mobile"> 

           <div className="ads-mobile">
                <small className="ads-mobile-title">Publicidade</small>
                <img className="ads-mobile-img" src={ADS} />
            </div>
        </div>    
    );
} 

export default Ads_Mobile;