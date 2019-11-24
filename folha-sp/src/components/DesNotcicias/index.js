import React from 'react';

import Consetis from '../../images/desktop/divoltis_porris-01.png';
import Aenean from '../../images/desktop/divoltis_porris-02.png';
import Matis from '../../images/desktop/divoltis_porris-03.png';
import Divinis from '../../images/desktop/divoltis_porris-04.png';

import './styles.css';

function Noticia_Recom() {
    return (

        <div className="noticias-recomendadas"> 

            <h2 className="noticia-title">Divoltis porris</h2>
            
            <div className="recomendadas">
                <figure>
                    <img className="recomendadas-img" src={Consetis} alt="Mussum"/>
                    <figcaption className="recomendadas-caption">consetis</figcaption>
                    <p>Manduma pindureta quium dia nois paga. Sapien in monti palavris</p>
                </figure>
            </div>

            <div className="recomendadas">
                <figure>
                    <img className="recomendadas-img" src={Aenean} alt="girl"/>
                    <figcaption className="recomendadas-caption">aenean</figcaption>
                    <p>Pellentesque laoreet mé vel lectus scelerisque interdum cursus</p>
                </figure>
            </div>

            <div className="recomendadas">
                <figure>
                    <img className="recomendadas-img" src={Matis} alt="girl"/>
                    <figcaption className="recomendadas-caption">matis</figcaption>
                    <p>Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>
                </figure>
            </div>

            <div className="recomendadas">
                <figure>
                    <img className="recomendadas-img" src={Divinis} alt="girl"/>
                    <figcaption className="recomendadas-caption">divinis</figcaption>
                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis</p>
                </figure>
            </div>
                
        </div>
    
    );
} 

export default Noticia_Recom;
