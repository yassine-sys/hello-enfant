import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbarapp from './component/Navbarapp';
import Carousselle from './component/Carousselle';
import CrecheHome from './component/CrecheHome'
import JardinHome from './component/JardinHome';
import EcoleHome from './component/EcoleHome';
import ClubHome from './component/ClubHome';


function App() {
  return (
    <div className="App">
      <Navbarapp />
      <Carousselle/>
      <CrecheHome />
      <JardinHome />
      <EcoleHome />
      <ClubHome />

      
    </div>
  );
}

export default App;
