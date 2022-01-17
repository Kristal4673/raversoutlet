const mongoose = require('mongoose')

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        },
    price: {
        type: Number, 
        required: true, 
        min: 0.99
    },
    image: {
        type: String,        
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
    ,
    description: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;