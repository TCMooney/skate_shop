import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthState';

export default function () {

  const { isAuthenticated, signOut } = useContext(AuthContext);

  const notAuthenticated = (
    <div className='auth-links'>
      <Link className='nav-link' to='/auth'>Sign In</Link>
      <Link className='nav-link' to='/auth'>Sign Up</Link>
    </div>
  )

  return (
    <div className='nav-links-wrapper'>
      <div className='about-link'>
        <Link className='nav-link' to='/products'>New Stuff</Link>
      </div>
      <div className='shop-link'>
        <Link className='nav-link' to='/gear'>Gear</Link>
      </div>
      <div className='contact-link'>
        <Link className='nav-link' to='/decks'>Decks</Link>
      </div>
      <div className='shoes-link'>
        <Link className='nav-link' to='/shoes'>Shoes</Link>
      </div>
      <div className='clearance-link'>
        <Link className='nav-link' to='/clearance'>
          Clearance
        </Link>
      </div>
      <div className='auth-links'>
        {!isAuthenticated ? notAuthenticated :
          <div className='auth-links'>
            <a onClick={() => signOut()} className='nav-link'> Sign Out</a>
          </div>
        }
      </div>
    </div>
  )
}