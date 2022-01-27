const mongoose = require("mongoose");
const Product = require("./Product");
const productSchema = Product.schema;
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      // type: productSchema,
      type: String,
      ref: "Category",
      required: true,
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
