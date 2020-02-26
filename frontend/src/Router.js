import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/home/Home';
import NotFound from './components/404/NotFound.js';
import Footer from './components/Footer';
import Login from './pages/login/login';

// const loginDummy = () => <h1>Login Dummy</h1>

const Router = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
);

export default Router;
