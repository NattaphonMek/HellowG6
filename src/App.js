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
      <Navbar />
      <div id="home">
      <br />
      <br />
      <br />
      
      
      <Landing />
      </div>
      <div id="what">
      <What/>
      </div>
      <div id="where">
      <Where/>
      </div>
      <div id="who">
      <Who/>
<<<<<<< HEAD
      </div>
      <div id="when">
      <When/>
      </div>
      <div id="faqs">
=======
      <When/>
>>>>>>> e6d5563c3134a14cf2cd2225ac7e017386da0f41
      <FAQs/>
      </div>
       
      </div>
    );
  }
}

export default App;
