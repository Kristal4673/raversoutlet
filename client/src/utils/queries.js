import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query {
    products {
      _id
      name
      price
      quantity
    }
  }
`;

export const QUERY_PRODUCT = gql`
query($productId: ID) {
  product(productId: $productId){
    _id
    name
    price
    quantity
    category
  } 
}
`