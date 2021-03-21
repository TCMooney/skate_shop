import React, { Component } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';

import history from '../history';

import { ProductsProvider } from '../contexts/ProductsState';
import { AuthProvider } from '../contexts/AuthState';

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
import ProductManager from './pages/auth-pages/ProductManager';
import ProductDetail from './products/ProductDetail';

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
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
                <Route path='/product-manager' component={ProductManager} />
                <Route path='/productDetail/:id' component={ProductDetail} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </ProductsProvider>
      </AuthProvider>
    );
  }
}
