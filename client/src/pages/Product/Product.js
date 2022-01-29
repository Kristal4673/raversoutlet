import { useQuery } from '@apollo/client';
import React, {  } from 'react';
import { QUERY_PRODUCT } from '../../utils/queries';
import loadingIcon from '../../img/loading-icon.png'
import './Product.css';

const Product = () => {

  const url = window.location.href;
  const endIndex = url.lastIndexOf('/');
  const productId = url.substring(endIndex + 1);
  console.log(productId);


  const { loading, err, data } = useQuery(QUERY_PRODUCT, {
    variables: { productId }
  });

  if(loading){
    return <div>Loading</div>
  }

  if(err){
    console.log(err)
  }

  if(!data){
    console.log('no data');
  }

  const {  category, name, price, quantity } = data?.product;
  

  return (
    <div className='product-ctn'>
      <div className='product-photo'>
        <img alt={`${name}`} src={loadingIcon} />
      </div>
      <div className='product-body'>
        <h1 className='product-name'>{name}</h1>
        <p>${price}</p>
        <p>{quantity} LEFT IN STOCK</p>
        <p>CATEGORY: {category}</p>
        <button className='product-add-btn'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
