import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthState';

import NavLinks from './nav-links';

export default function NavBar() {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser()
  }, [])
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