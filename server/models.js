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

  insertProduct(productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder, cb) {
    this.model.create({sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder, productId}, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };

  updateProduct(inputId, updateDetail, cb) {

    this.model.findOneAndUpdate({productId: inputId}, updateDetail, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };

  deleteProduct(inputId, cb) {
    this.model.findOneAndRemove({'productId': inputId}, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };
}


module.exports = new ProductDetailsModel();
