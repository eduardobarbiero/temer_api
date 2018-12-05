const Product = require('../models').Product;

module.exports = {  
  index(req, res) {
    return Product
      .all()
      .then(Products => Products)
      .catch(error => error);
  },
  findById(req, res) {
    return Product
      .findById(req.params.id)
      .then(Product => Product)
      .catch(error => error);
  }
};