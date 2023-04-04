import './App.css';
import React, {Fragment, useEffect} from 'react';
import {Navbar} from '../Navbar.js';
import { Home } from '../Home';
import { Education } from '../Education';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Experience } from '../Experience';
import { Portfolio } from '../Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./ScrollToTop";



function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Router>
      
      <Navbar />
      <ScrollToTop />
      <Fragment>
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
      </Fragment>
      
      
    </Router>
  );
}

export default App;
