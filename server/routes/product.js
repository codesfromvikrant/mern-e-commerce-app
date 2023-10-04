const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const product = require('../models/product');

router.post('/product', async (req, res) => {
  try {
    const newProduct = await product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});