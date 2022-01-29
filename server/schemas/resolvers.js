const { User, Product, Category } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },

    products: async () => {
      return Product.find();
    },

    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    category: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId });
    },
<<<<<<< HEAD
    productsCategory: async (parent, { category }) => {
      // console.log(category);
      return Product.find({ category: "Tops"});

=======
    productsTops: async (parent, { category }) => {
      // console.log(category);
      return Product.find({ category: "Tops" });
    },
    productsBottoms: async (parent, { category }) => {
      return Product.find({ category: "Bottoms" });
    },
    productsShoes: async (parent, { category }) => {
      return Product.find({ category: "Shoes" });
    },
    productsAccs: async (parent, { category }) => {
      return Product.find({ category: "Accessories" });
>>>>>>> main
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, email, phoneNumber, address }
    ) => {
      return User.create({ firstName, lastName, email, phoneNumber, address });
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ where: { email: email } });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
