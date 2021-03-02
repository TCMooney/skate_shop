import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './nav-links';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar-wrapper'>
        <div className='left-side'>
          <Link className='logo-wrapper' to='/'>
            <div className='logo-top'>
              CSS
            </div>
            <div className='logo-bottom'>
              Cheeps Skate Shop
            </div>
          </Link>
        </div>
        <div className='right-side'>
          <NavLinks />
        </div>
      </div>
    )
  }
}

export default NavBar;