import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/projects" component={ Projects }></Route>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
