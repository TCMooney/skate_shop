import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'

import history from '../history';
import NavBar from './nav-bar/nav-bar';
import Home from './pages/home'
import About from './pages/about';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Cart from './pages/cart';


export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className='app'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/shop' component={Shop} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}
