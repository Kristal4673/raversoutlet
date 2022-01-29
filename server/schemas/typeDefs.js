const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int
    address: String!
  }

  type Product {
    _id: ID!
    name: String!
    price: Float!
    image: String
    quantity: Int!
    description: String
    category: String
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Order {
    _id: ID!
    productName: String!
    price: Float!
    image: String
    quantity: Int!
    description: String
    shipping: String
    history: String
    category: Category
  }

  type Query {
    users: [User]!
    user(userId: ID!): User!

    products: [Product]!
    product(productId: ID): Product!

    orders: [Order]
    order(orderId: ID): Order!

    categories: [Category]!
    category(categoryId: ID): Category!

    productsTops(category: String): [Product]
    productsBottoms(category: String): [Product]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      phoneNumber: Int
      address: String!
    ): User
    login(email: String!, password: String!): Auth!
  }
`;

module.exports = typeDefs;
