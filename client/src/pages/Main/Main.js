import { useQuery } from '@apollo/client';
import React from 'react';
import Searchbar from '../../Components/Searchbar/Searchbar';
import { QUERY_PRODUCTS } from '../../utils/queries';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Main.css'

function Main() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if(error){
    console.log("error", error)
  }

  if(loading)
  {
    return <div>Loading...</div>
  }
  
  const products = data?.products;
  
  console.log(products)

  return( 
    <div>
        <Searchbar />
        <div className='products-ctn'>
          {products.map((product) =>{
            return (
              <ProductCard name={product.name} quantity={product.quantity} price={product.price}/>
            )
          })}
        </div>
    </div>
  );
}

export default Main;
