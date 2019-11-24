import React from 'react';

import Ads_Desktop from '../../images/desktop/ads_desktop.png';
import Ads_Mobile from '../../images/mobile/ads-300x250.png';

import './styles.css';

function Anuncio() {
    return (
        <div className="ads"> 
          
           <div className="ads-desktop">
                <small className="ads-desktop-title">Publicidade</small>
                <img className="ads-desktop-img" src={Ads_Desktop} />
            </div>

           
           <div className="ads-mobile">
                <small className="ads-mobile-title">Publicidade</small>
               <img className="ads-mobile-img" src={Ads_Mobile} />
            </div>
            
        </div>
    );
} 

export default Anuncio;
