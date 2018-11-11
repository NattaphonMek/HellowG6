import React, { Component } from 'react';
import './App.css';

import What from './Component/What'
// import Contact from './Component/Contact';
import Navbar from './Component/Navbar.js'
import Landing from './Component/Landing.js'
import Who from './Component/Who.js'
import Where from './Component/Where.js'
import When from './Component/When.js'

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
      </div>
    );
  }
}

export default App;
