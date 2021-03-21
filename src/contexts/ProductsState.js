import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import ProductsReducer from '../reducers/ProductsReducer';


const initialState = {
  products: [],
  productDetail: {},
  error: '',
  isLoading: true,
  descriptionHover: false
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
  async function addProduct(formData, success) {
    try {
      const res = await axios.post('http://localhost:4000/products/new', formData)

      console.log(res.data)
      dispatch({
        type: 'ADD_NEW_PRODUCT',
        payload: res.data
      })

      success();
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductDetail(id) {
    try {
      const res = await axios.get(`http://localhost:4000/products/productDetail/${id}`)

      dispatch({
        type: 'GET_PRODUCT_DETAIL',
        payload: res.data
      })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  async function descriptionDisplay() {
    try {
      dispatch({
        type: 'DISPLAY_DESCRIPTION'
      })
    }
    catch (err) {
      dispatch({
        type: 'GET_ERROR',
        payload: console.log(err)
      })
    }
  }
  return (
    <ProductsContext.Provider value={{
      products: state.products,
      productDetail: state.productDetail,
      error: state.error,
      isLoading: state.isLoading,
      getProducts,
      addProduct,
      descriptionDisplay,
      getProductDetail
    }}>
      {children}
    </ProductsContext.Provider>
  )
}