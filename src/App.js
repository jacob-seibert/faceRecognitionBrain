import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import Rank from './Components/Rank/Rank.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" color="#FFFFFF" num={350} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

/*
Code to implement ParticlesBg:
<Particlesbg type='circle' bg={true} />

Code to implement Tilt:
import Tilt from 'react-parallax-tilt';
------------------------------------
<tilt>
....
</tilt>
*/

