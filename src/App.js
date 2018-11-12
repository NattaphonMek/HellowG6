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
<<<<<<< HEAD
import Contact from './Component/Contact.js'
=======
//import Nav from './Component/Nav'
>>>>>>> cdb8d5e54e25c1e16209956f5a16ada8d99475ac

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
      </div>
      <div id="when">
      <When/>
      </div>
      <div id="faqs">
      <FAQs/>
<<<<<<< HEAD
      <Contact/>
=======
      </div>
>>>>>>> cdb8d5e54e25c1e16209956f5a16ada8d99475ac
       
      </div>
    );
  }
}

export default App;
