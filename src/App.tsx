import React from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';



function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
