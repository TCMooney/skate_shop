import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='nav-links-wrapper'>
      <div className='home-link'>
        <Link className='nav-link' to='/'>Home</Link>
      </div>
      <div className='about-link'>
        <Link className='nav-link' to='/new-arrivals'>New Arrivals</Link>
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
    </div>
  )
}