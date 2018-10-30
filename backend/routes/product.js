const express = require('express');

const Product = require('../models/product');

const router = express.Router();

router.get('/:field', (req, res) => {
  console.log('first route', req.params.field);
  Product.find({field: req.params.field}).then(products => {
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({message: 'Products not found!'});
    }
  });
});

router.get('/:field/:linkname', (req, res) => {
  console.log('second route', req.params.field);
  Product.find({field: req.params.field, linkname: req.params.linkname}).then(product => {
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({message: 'Products not found!'});
    }
  });
});

module.exports = router;
