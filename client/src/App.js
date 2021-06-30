import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbarapp from './component/Navbarapp';
import Carousselle from './component/Carousselle';
import Creche from './component/Creche'
import Jardin from './component/Jardin';
import Ecole from './component/Ecole';
import Club from './component/Club';
import PartenaireCard from './component/PartenaireCard';
import PartenaireList from './component/PartenaireList';


function App() {
  return (
    <div className="App">
      <Navbarapp />
      <Carousselle/>
      <Creche />
      <Jardin />
      <Ecole />
      <Club />
      <PartenaireList />

      
    </div>
  );
}

export default App;
