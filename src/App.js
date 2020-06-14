import React from 'react';
import './App.css';

import Main from './Components/Main/Main';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Main />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
