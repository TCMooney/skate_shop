import React, { useContext, useEffect } from 'react';

import { ProductsContext } from '../../contexts/ProductsState';

export default function ProductDetail(props) {
  const { productDetail, getProductDetail } = useContext(ProductsContext);

  useEffect(() => {
    getProductDetail(props.match.params.id)
  }, [])

  const { brand, category, description, imageUrl, name, price, quantity } = productDetail;

  return (
    <div className='detail-wrapper'>
      <h3 className='detail-name'>
        {name}
      </h3>
      <img src={imageUrl} className='detail-image' />
      <div className='detail-price'>
        {price}
      </div>
      <div className='detail-description-wrapper'>
        <div className='detail-description'>
          Description: {description}
        </div>
        <div className='detail-category'>
          Category: {category}
        </div>
      </div>

    </div>
  )
}
