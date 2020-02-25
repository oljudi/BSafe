import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Footer from './components/Footer';

const Router = () => (
  <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
    <Footer/>
  </>
);

export default Router;
