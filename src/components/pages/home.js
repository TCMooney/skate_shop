import React from 'react';
import { Link } from 'react-router-dom';

import NewArrivals from '../../../static/assets/images/home/new-arrivals.jpg';
import Gear from '../../../static/assets/images/home/Gear.png';
import Decks from '../../../static/assets/images/home/decks.jpg';
import Shoes from '../../../static/assets/images/home/Shoes.jpg';
import Clearance from '../../../static/assets/images/home/clearance.jpg';

export default function home() {
  return (
    <div>
      <div className='home-wrapper'>
        <div className='top'>
          <Link to='/new-arrivals' className='top-left home-link' style={{
            backgroundImage: `url(${NewArrivals})`
          }}>
            New Arrivals
          </Link>
          <Link to='/gear' className='top-right home-link' style={{
            backgroundImage: `url(${Gear})`
          }}>
            Gear
          </Link>
        </div>
        <div className='middle'>
          <Link to='/decks' className='middle-left home-link' style={{
            backgroundImage: `url(${Decks})`
          }}>
            Decks
          </Link>
          <Link to='/shoes' className='middle-right home-link' style={{
            backgroundImage: `url(${Shoes})`
          }}>
            Shoes
          </Link>
        </div>
        <Link to='/clearance' className='bottom home-link' style={{
          backgroundImage: `url(${Clearance})`
        }}>
          Clearance
        </Link>
      </div>
    </div>
  )
}
