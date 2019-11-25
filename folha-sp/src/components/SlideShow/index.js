import React from 'react';
import { Slide } from 'react-slideshow-image';

import Show from '../../images/desktop/image_rotate.png';

import './styles.css';

const propriedades = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
}

function SlideShow() {
    return (
        <div className="containerSlide">

            <div className="slide">
                
                <Slide className="slide-show" {...propriedades}>
                    <figure className="slide-figure">
                        <img src={Show} alt="slide-01"/>
                        <figcaption className="slide-title" ><span>mussum ipsun cacilds</span> 
                        <h1 className="slide-text"> Pra lá, depos devoltis porris, parados. Paisis, filhis, spiritis santis</h1>
                        </figcaption>  
                    </figure>
               
                    <figure className="slide-figure">
                        <img src={Show} alt="slide-01"/>
                        <figcaption className="slide-title" ><span>mussum ipsun cacilds</span> 
                        <h1 className="slide-text"> Pra lá, depos devoltis porris, parados. Paisis, filhis, spiritis santis</h1>
                        </figcaption>
                    </figure>
                </Slide>
            </div>
        </div>
    );
}

export default SlideShow;