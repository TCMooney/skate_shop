import React from 'react';

export default function ProductManagerItem(props) {
  console.log(props)
  const { name, quantity, description, imageUrl, brand, category, price, date, size } = props;

  const parsedDate = new Date(date);
  return (
    <div className='product-manager-item-wrapper'>
      <div className='product-manager-item-date'>
        {parsedDate.getMonth() + 1 + '/' + parsedDate.getDate() + '/' + parsedDate.getFullYear()}
      </div>
      <div className='product-manager-item-image'>
        <img src={imageUrl} />
      </div>
      <div className='product-manager-item-name'>
        {name}
      </div>
      <div className='product-manager-item-brand'>
        {brand}
      </div>
      <div className='product-manager-item-quantity'>
        {quantity}
      </div>
      <div className='product-manager-item-description'>
        {description}
      </div>
      <div className='product-manager-item-size'>
        {size}
      </div>
      <div className='product-manager-item-category'>
        {category}
      </div>
      <div className='product-manager-item-price'>
        {price}
      </div>
    </div>
  )
}
