import React, { Component } from 'react';
import './App.css';

import What from './Component/What'
// import Contact from './Component/Contact';
import Navbar from './Component/Navbar.js'
import Landing from './Component/Landing.js'
import Who from './Component/Who.js'
import Where from './Component/Where.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      {/* <Contact/> */}
     
      <Landing />
      <Navbar />
      <What/>
      <Who/>
      <Where/>

      </div>
    );
  }
}

export default App;
