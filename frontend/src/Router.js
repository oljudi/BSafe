import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/home/Home';
import NotFound from './components/404/NotFound.js';
import Footer from './components/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Contacts from './pages/contacts/Contacts';
import Contact from './pages/contact/Contact';

// const loginDummy = () => <h1>Login Dummy</h1>
// const signupDummy = () => <h1>SignUp Dummy</h1>
// const profileDummy = () => <h1>Profile Dummy</h1>
// const contactDummy = () => <h1>Contacs Dummy</h1>
// const contactDummy = () => <h1>Contacs Dummy</h1>


const Router = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/contacts" component={Contacts} />
      <Route exact path='/contact/new' component={Contact}/>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
);

export default Router;
