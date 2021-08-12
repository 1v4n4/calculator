import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (

  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Calculator" component={Calculator} />
      <Route path="/Quote" component={Quote} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
