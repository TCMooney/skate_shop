import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import ProductsReducer from '../reducers/ProductsReducer';


const initialState = {
  products: [],
  productDetail: {},
  error: '',
  isLoading: true
}

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  async function getProducts() {
    try {
      const res = await axios.get('http://localhost:4000/products/')

      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'GET_ERROR',
        payload: console.log(err)
      })
    }
  }
  return (
    <ProductsContext.Provider value={{
      products: state.products,
      productsDetail: state.productDetail,
      error: state.error,
      isLoading: state.isLoading,
      getProducts
    }}>
      {children}
    </ProductsContext.Provider>
  )
}