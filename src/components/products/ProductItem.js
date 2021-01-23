import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  const { name, category, description, imageURL, quantity, id } = props;
  return (
    <div key={id} className='product-item-wrapper'>
      <Link to={`/${category}/${id}`}>
        <div className='product-name'>
          {name}
        </div>
      </Link>
    </div>
  )
}
