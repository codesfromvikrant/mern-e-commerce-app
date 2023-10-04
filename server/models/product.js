const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  label: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    trim: true,
  },

  discount: {
    type: Number,
    required: true,
    trim: true,
  },

  tax_charge: {
    type: Boolean,
    required: true,
    trim: true,
  },

  in_stock: {
    type: Boolean,
    required: true,
    trim: true,
  },
});


const product = mongoose.model('product', productSchema);
module.exports = product;