import React from 'react';
import './App.css';
import Header from './Components/Header';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Action1 from './Components/Actions1';
import Accordion from './Components/Service/Accordion';

function App() {
  return (
    <div className="App scroll-auto">
      <Header/>
      <Container/>
      <Navbar/>
     <Action1/>
     <Accordion/>

    </div>
  );
}

export default App;
