import React, {Component} from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';



export class App extends Component {

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() { 
    return(
    <div className="app">
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
    )
  }
}
