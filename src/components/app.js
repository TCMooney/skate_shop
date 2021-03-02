import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'

import { ProductsProvider } from '../contexts/ProductsState';

import history from '../history';
import NavBar from './nav-bar/nav-bar';
import Home from './pages/home'
import About from './pages/about';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Footer from './footer/footer';
import Auth from './pages/Auth';
import Products from './pages/Products';
import AddNewProduct from './pages/AddNewProduct';


export default class App extends Component {
  render() {
    return (
      <ProductsProvider>
        <Router history={history}>
          <div className='app'>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/shop' component={Shop} />
              <Route path='/cart' component={Cart} />
              <Route path='/auth' component={Auth} />
              <Route path='/products' component={Products} />
              <Route path='/add-product' component={AddNewProduct} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ProductsProvider>
    );
  }
}
