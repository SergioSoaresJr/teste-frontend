import React from 'react';

import Logo from '../../images/desktop/logo_footer.png'
import './styles.css';

function Footer () {
    return (
        <div className="footer">
            <img className="logo-img" src={Logo} alt="Logo-Rada-Pé"/>
            <small className="text">
                Copyright Folha de S. Paulo. Todos os direitos reservados. É probida a reprodução 
                do conteúdo desta página  em qualquer meio de comunicação, eletrônico ou impresso, 
                sem autorização escrita da Folhapress (pesqisa@folhapress.com.br)
             </small>
        </div>
    ); 
}

export default Footer;