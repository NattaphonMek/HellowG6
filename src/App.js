import React, { Component } from 'react';
import './App.css';

import What from './Component/What'
import Contact from './Component/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
      <What/>
      <Contact/>
      </div>
    );
  }
}

export default App;
