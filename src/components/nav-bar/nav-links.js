import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='nav-links-wrapper'>
      <div className='home-link'>
        <Link className='nav-link' to='/'>Home</Link>
      </div>
      <div className='about-link'>
        <Link className='nav-link' to='/about'>About</Link>
      </div>
      <div className='shop-link'>
        <Link className='nav-link' to='/shop'>Shop</Link>
      </div>
      <div className='contact-link'>
        <Link className='nav-link' to='/contact'>Contact</Link>
      </div>
      <div className='cart-link'>
        <Link className='nav-link' to='/cart'>Cart</Link>
      </div>
    </div>
  )
}