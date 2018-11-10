import React, { Component } from 'react';
import './App.css';

import What from './Component/What'
// import Contact from './Component/Contact';
import Navbar from './Component/Navbar.js'
import Landing from './Component/Landing.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <What/>
      {/* <Contact/> */}
     
      <Navbar />
      <Landing />

      </div>
    );
  }
}

export default App;
