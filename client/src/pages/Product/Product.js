import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { QUERY_PRODUCT } from '../../utils/queries';

const Product = () => {

  const url = window.location.href;
  const productId = url.substring(27);

  const { loading, err, data } = useQuery(QUERY_PRODUCT, {
    variables: { productId }
  });

  if(loading){
    return <div>Loading</div>
  }

  if(err){
    console.log(err)
  }

  const { __typename, _id, category, name, price, quantity } = data?.product;
  

  return (
    <div>
      <div className='product-photo'>

      </div>
      <div>
        <h1 className='product-name'>{name}</h1>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Product;
