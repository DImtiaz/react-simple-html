import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div>
       <Router>
       <Navbar></Navbar>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/contact' component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
