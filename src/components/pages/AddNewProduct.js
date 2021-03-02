import React, { useState, useContext } from 'react';

import FormLabel from '../FormLabel';
import { ProductsContext } from '../../contexts/ProductsState';

export default function AddNewProduct(props) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('deck');
  const [price, setPrice] = useState('');
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
      imageData: base64EncodedImage
    }
    console.log(newProduct)
    addProduct(newProduct, () => props.history.push('/'));
  }

  return (
    <div>
      <form onSubmit={handleFileSubmit}>

        <div className='new-product-input'>
          <FormLabel labelName='Item Name' />
          <input type='text' name='itemName' onChange={event => setItemName(event.target.value)} placeholder='Name of Item' value={itemName} />
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Quantity' />
          <input type='text' name='quantity' onChange={event => setQuantity(event.target.value)} placeholder='Quantity' value={quantity} />
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Description' />
          <input type='text-area' name='description' onChange={event => setDescription(event.target.value)} placeholder='Description' value={description} />
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Brand' />
          <input type='text' name='brand' onChange={event => setBrand(event.target.value)} placeholder='Brand' value={brand} />
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Category' />
          <select name='category' onChange={event => setCategory(event.target.value)} value={category}>
            <option value='deck'>Deck</option>
            <option value='shoes'>Shoes</option>
            <option value='gear'>Gear</option>
          </select>
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Price' />
          <input type='text' name='price' onChange={event => setPrice(event.target.value)} placeholder='Price' value={price} />
        </div>

        <div className='new-product-input'>
          <FormLabel labelName='Image' />
          <input type='file' name='imageSource' onChange={onImageSourceChange} value={fileInputState} />
        </div>

        <button type='submit'>Submit</button>

      </form>
      { imageSource && (
        <img src={imageSource} alt='image' style={{ height: '300px' }} />
      )}
    </div>
  )
}
