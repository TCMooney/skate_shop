import React from 'react';
import { Link } from 'react-router-dom';

import baker from '../../../static/assets/images/temporaryProducts/baker.png'

export default function ProductItem(props) {
  const { name, category, description, quantity, _id } = props;


  return (
    <div className='product-item-wrapper'>
      <Link to={`/${category}/${_id}`}>
        <div className='product-name'>
          {name}
        </div>
        <div className='product-image' style={{ backgroundImage: `url(${baker})` }} />
        <div className='product-description'>
          {description}
        </div>
      </Link>
    </div>
  )
}
