import React from 'react';

import Header from './components/Header';
import Top_Noticias from './components/TopNoticias';
import Noticia_Recom from './components/DesNotcicias';
import Anuncio from './components/Ads_Desktop'
import Fast_Noticias from './components/Fast_Noticias';
import Arts from './components/Arts';
import Ads_Mobile from './components/Ads_Mobile';
import Footer from './components/Footer'
import Voltar_Top from './components/Voltar_Top';
import SlideShow from './components/SlideShow';

import './styles.css';

function App(){
  return(
    <div className="App">
      <body>
        <Header />

          <main>
            <SlideShow />
            <Top_Noticias/>
            <Anuncio />
            <Noticia_Recom />
            <Fast_Noticias />
            <Arts />
            <Ads_Mobile />
          </main>

        <Voltar_Top />
        <Footer />
      </body>
  </div>
  );
}

export default App;
