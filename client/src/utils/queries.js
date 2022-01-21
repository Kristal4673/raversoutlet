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