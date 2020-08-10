import React, { Component } from 'react';

import NavLinks from './nav-links';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar-wrapper'>
        <div className='logo-wrapper'>
          <div className='logo-top'>
            CSS
          </div>
          <div className='logo-bottom'>
            Cheeps Skate Shop
          </div>
        </div>
        <NavLinks />
      </div>
    )
  }
}

export default NavBar;