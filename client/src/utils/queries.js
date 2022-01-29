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
    productsCategory(category: $category) {
      _id
      name
      price
      quantity
    }
  }
`;
export const PRODUCTS_Bottoms = gql`
  query ($category: String) {
    productsCategory(category: $category) {
      _id
      name
      price
      quantity
    }
  }
`;
export const PRODUCTS_SHOES = gql`
  query ($category: String) {
    productsCategory(category: $category) {
      _id
      name
      price
      quantity
    }
  }
`;
export const PRODUCTS_ACCESSORIES = gql`
  query ($category: String) {
    productsCategory(category: $category) {
      _id
      name
      price
      quantity
    }
  }
`;
