import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  const { name, category, description, imageUrl, quantity, _id } = props;


  return (
    <div className='product-item-wrapper'>
      <Link to={`/${category}/${_id}`}>
        <div className='product-item-name'>
          {name}
        </div>
        <div className='product-item-image'>
          <img src={imageUrl} />
        </div>
        <div className='product-item-description'>
          {description}
        </div>
      </Link>
    </div>
  )
}
