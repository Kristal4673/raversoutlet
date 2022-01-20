const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
  },
  shipping: {
    type: String,
  },
  // history: {
  //   type: String,
  // },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
