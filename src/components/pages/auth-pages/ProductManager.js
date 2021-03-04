import React, { useContext, useEffect } from 'react';

import { ProductsContext } from '../../../contexts/ProductsState';
import ProductManagerItem from '../../products/ProductManagerItem';

export default function ProductManager() {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='product-manager'>
      <h2>Product Manager</h2>
      <div className='product-manager-item'>
        {products.map(product => {
          return <ProductManagerItem key={product._id} {...product} />
        })}
      </div>
      <ProductManagerItem />
    </div>
  )
}
