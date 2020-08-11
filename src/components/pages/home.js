import React, { Component } from 'react';

import NewArrivals from '../../../static/assets/images/home/new-arrivals.jpg';
import Gear from '../../../static/assets/images/home/Gear.png';
import Decks from '../../../static/assets/images/home/decks.jpg';
import Shoes from '../../../static/assets/images/home/Shoes.jpg';
import Clearance from '../../../static/assets/images/home/clearance.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <div className='top'>
          <div className='top-left' style={{
            backgroundImage: `url(${NewArrivals})`
          }}>
            New Arrivals
          </div>
          <div className='top-right' style={{
            backgroundImage: `url(${Gear})`
          }}>
            Gear
          </div>
        </div>
        <div className='middle'>
          <div className='middle-left' style={{
            backgroundImage: `url(${Decks})`
          }}>
            Decks
          </div>
          <div className='middle-right' style={{
            backgroundImage: `url(${Shoes})`
          }}>
            Shoes
          </div>
        </div>
        <div className='bottom' style={{
          backgroundImage: `url(${Clearance})`
        }}>
          Clearance
        </div>
      </div >
    );
  }
}