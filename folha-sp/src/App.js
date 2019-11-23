import React from 'react';

import './styles.css'
import Header from './components/Header';
import Top from './components/TopNoticias';

function App(){
  return(
    <div className="App">
      <body>
        <Header />

        <main>
          <Top />
        </main>

      </body>
  </div>
  );
}

export default App;
