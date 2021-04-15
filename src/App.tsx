import React, {Component} from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';



export class App extends Component {

  render() { 
    return(
    <div className="app" id='app'>
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
    )
  }
}
