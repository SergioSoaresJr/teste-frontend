import React from 'react';

import Header from './components/Header';
import Top_Noticias from './components/TopNoticias';
import Noticia_Recom from './components/DesNotcicias';
import Anuncio from './components/Ads_Desktop'
import Fast_Noticias from './components/Fast_Noticias';

import './styles.css';

function App(){
  return(
    <div className="App">
      <body>
        <Header />

        <main>
          <Top_Noticias/>
          <Anuncio />
          <Noticia_Recom />
          <Fast_Noticias />
        </main>

      </body>
  </div>
  );
}

export default App;
