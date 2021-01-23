import React, { useEffect, useContext } from 'react';

import { ProductsContext } from '../../contexts/ProductsState';
import ProductItem from '../products/ProductItem';

export default function Products() {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products)
  return (
    <div>
      {products.map(product => {
        return <ProductItem key={product.id} {...product} />
      })}
    </div>
  )
}
