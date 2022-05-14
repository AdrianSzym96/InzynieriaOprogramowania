import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calc2 from './components/pages/Calc2';
import Calculator from './components/pages/Calculator';
import { useEffect } from "react";



function App() {
  return (
    
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Calc2' component={Calc2} />
          <Route path='/calculator' component={Calculator} />
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
