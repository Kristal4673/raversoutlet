import React from 'react';
import './ProductCard.css'

function ProductCar(props) {
  return (
    <div className='product'>
        <div className='products-card-img'>

        </div>
        <div className='products-card-body'>
          <h2 className='product-name'>{props.name}</h2>
          <p className='product-price'>{props.price}$</p>
          <p className='product-quantity'>{props.quantity} left in stock</p>
        </div>
    </div>
  );
}

export default ProductCar;
