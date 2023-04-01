import './App.css';
import React from 'react';
import {Navbar} from '../Navbar.js';
import { Home } from '../Home';
import { Education } from '../Education';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Experience } from '../Experience';
import { Portfolio } from '../Portfolio';


function App() {
  return (
    <Router>
      
      <Navbar /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
