import React from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero'



function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      {/*<Services/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
