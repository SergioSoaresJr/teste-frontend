import React from 'react';

import Highlight01 from '../../images/desktop/highlight-01.png';
import Highlight02 from '../../images/desktop/highlight-02.png';
import Highlight03 from '../../images/desktop/highlight-03.png';

import './styles.css';

function Top_Noticias() {
    return (
        <div className="top-naticias"> 

            <h2 className="highlights-title">Top cacildis</h2>
           
            <figure className="highlights">
                <img className="highlights-img" src={Highlight01} alt="girl"/>
                <figcaption className="highlights-caption"><span>pindureta</span></figcaption>
            </figure>

            <figure className="highlights">
                <img className="highlights-img" src={Highlight02} alt="rhino"/>
                <figcaption className="highlights-caption"><span>bolis</span></figcaption>
            </figure>

            <figure className="highlights">
                <img className="highlights-img" src={Highlight03} alt="bird"/>
                <figcaption className="highlights-caption"><span>sapien</span></figcaption>
            </figure>
        </div>
    );
} 

export default Top_Noticias;