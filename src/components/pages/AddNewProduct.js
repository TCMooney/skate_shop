import React, { useState, useContext } from 'react';

import FormLabel from '../FormLabel';
import { ProductsContext } from '../../contexts/ProductsState';

export default function AddNewProduct(props) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [fileInputState, setFileInputState] = useState('');

  const { addProduct } = useContext(ProductsContext)

  const onImageSourceChange = event => {
    const image = event.target.files[0];
    setFileInputState(event.target.value)
    previewFile(image);
  }

  const previewFile = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImageSource(reader.result);
    }
  }

  const handleFileSubmit = (event) => {
    event.preventDefault();
    console.log('submitted')
    if (!imageSource) return;
    onSubmit(imageSource)
  }

  const onSubmit = (base64EncodedImage) => {
    const newProduct = {
      itemName,
      quantity,
      description,
      brand,
      category,
      price,
      size,
      imageData: base64EncodedImage
    }
    console.log(newProduct)
    addProduct(newProduct, () => props.history.push('/'));
  }

  return (
    <div className='new-product'>
      <h2 className='new-product-title'>Add New Product</h2>
      <form className='new-product-form' onSubmit={handleFileSubmit}>

        <div className='new-product-left-side'>
          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Item Name' /> */}
            <input className='new-product-input-text' type='text' name='itemName' onChange={event => setItemName(event.target.value)} placeholder='Name of Item' value={itemName} />
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Quantity' /> */}
            <input className='new-product-input-text' type='text' name='quantity' onChange={event => setQuantity(event.target.value)} placeholder='Quantity' value={quantity} />
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Description' /> */}
            <textarea
              className='new-product-input-text' name='description' onChange={event => setDescription(event.target.value)} placeholder='Description' value={description} />
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Brand' /> */}
            <input className='new-product-input-text' type='text' name='brand' onChange={event => setBrand(event.target.value)} placeholder='Brand' value={brand} />
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Image' /> */}
            <input type='file' name='imageSource' onChange={onImageSourceChange} value={fileInputState} />
          </div>
        </div>

        <div className='new-product-right-side'>
          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Category' /> */}
            <select className='new-product-input-text' name='category' onChange={event => setCategory(event.target.value)} value={category}>
              <option value=''>Category</option>
              <option value='deck'>Deck</option>
              <option value='shoes'>Shoes</option>
              <option value='gear'>Gear</option>
            </select>
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Price' /> */}
            <input className='new-product-input-text' type='text' name='price' onChange={event => setPrice(event.target.value)} placeholder='Price' value={price} />
          </div>

          <div className='new-product-input'>
            {/* <FormLabel className='new-product-input-label' labelName='Size' /> */}
            <input className='new-product-input-text' type='text' name='size' onChange={event => setSize(event.target.value)} placeholder='Size' value={size} />
          </div>

          <button className='new-product-submit' type='submit'>Submit</button>
        </div>
      </form>
      { imageSource && (
        <img src={imageSource} alt='image' style={{ height: '150px' }} />
      )}
    </div>
  )
}
