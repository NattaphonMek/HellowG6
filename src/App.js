import React, { Component } from 'react';
import './App.css';

import What from './Component/What'
// import Contact from './Component/Contact';
import Navbar from './Component/Navbar.js'
import Landing from './Component/Landing.js'
import Who from './Component/Who.js'
import Where from './Component/Where.js'
import When from './Component/When.js'
import FAQs from './Component/FAQs.js'
//import Nav from './Component/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Landing />
      <Navbar />
      <What/>
      <Where/>
      <Who/>
      <When/>
      <FAQs/>
       
      </div>
    );
  }
}

export default App;
