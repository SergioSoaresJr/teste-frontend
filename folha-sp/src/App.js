import React from 'react';

import Header from './components/Header';
import Top_Noticias from './components/TopNoticias';
import Noticia_Recom from './components/DesNotcicias';

import './styles.css';

function App(){
  return(
    <div className="App">
      <body>
        <Header />

        <main>
          <Top_Noticias/>
          <Noticia_Recom />
        </main>

      </body>
  </div>
  );
}

export default App;
