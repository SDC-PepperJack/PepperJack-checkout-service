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
    if (!this.model.findOne({productId})) {
      this.model.create({sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder, productId}, (err, result) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, result);
        }
      });
    } else {
      let err = 'Product already in database';
      cb(err, null);
    }
  };

  updateProduct(inputId, updateDetail, cb) {
    this.model.updateOne({productId: inputId}, updateDetail, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  };

  deleteProduct(inputId, cb) {
    if (this.model.findOne({productId: inputId})) {
      this.model.deleteOne({productId: inputId}, (err, result) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, result);
        }
      });
    } else {
      let err = 'Product does not exist';
      cb(err, null);
    }
  };
}


module.exports = new ProductDetailsModel();
