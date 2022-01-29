import { gql } from "@apollo/client";

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
  query ($productId: ID) {
    product(productId: $productId) {
      _id
      name
      price
      quantity
      category
    }
  }
`;

export const PRODUCTS_TOPS = gql`
  query ($category: String) {
    productsTops(category: $category) {
      _id
      name
      price
      quantity
      category
    }
  }
`;
export const PRODUCTS_BOTTOMS = gql`
  query ($category: String) {
    productsBottoms(category: $category) {
      _id
      name
      price
      quantity
      category
    }
  }
`;
