const mongoose = require('mongoose');
const productDetails = require('../db/index.js');

class ProductDetailsModel {
  constructor() {
    this.model = productDetails;
  }

  async getProduct(productId) {
    let productData = await this.model.findOne({ productId });
    if (!productData) {
      throw new Error('product not found');
    }
    return productData;
  }

  deleteProduct(productId, cb) {
    this.model.findOneAndRemove({'productId': productId}, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };
}


module.exports = new ProductDetailsModel();
