import React from 'react';

import Animais from '../../images/desktop/se_pirulita-01.png';
import Gostis from '../../images/desktop/se_pirulita-02.png';
import Serva from '../../images/desktop/suco_de_cevadiss-01.png';
import Olho from '../../images/desktop/suco_de_cevadiss-02.png';
import './styles.css'

function Arts() {
    return (
        <div className="arts"> 

            <div className="arts-01">
                <h2 className="arts-title">Se pirulitá</h2>
                <div className="art">
                    <img className="art-img" src={Animais} alt="desenho-animais"/>
                    <div className="art-content">
                        <h3 className="art-artist">Nam liber</h3>
                        <h2 className="art-description">Casamentiss faiz malandris se pirulitá</h2>
                    </div>    
                </div> 

                <div>
                    <img className="art-img" src={Gostis} alt="desenho-moça"/>
                    <div className="art-content">
                        <h3 className="art-artist">gostis</h3>
                        <h2 className="art-description">Aenean ut ante turpis. Pellentesque laoreet mé</h2>
                    </div>    
                </div>
            </div>    

            <div className="arts-02">
                <h2 className="arts-title">Suco de cevadiss</h2>
                
                <div className="art">
                    <img className="art-img" src={Serva} alt="desenho-animais"/>
                    <div className="art-content">
                        <h3 className="art-artist">interagi</h3>
                        <h2 className="art-description">É um leite divinis, qui tem lupuliz, matis, aguis e fermentis</h2>
                    </div>    
                </div> 

                <div>
                    <img className="art-img" src={Olho} alt="desenho-moça"/>
                    <div className="art-content">
                        <h3 className="art-artist">gostis</h3>
                        <h2 className="art-description">Aenean ut ante turpis. Pellentesque laoreet mé</h2>
                    </div>    
                </div>
            </div>  
        </div>
    );
} 

export default Arts;