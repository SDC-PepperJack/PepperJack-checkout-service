const { Pool } = require('pg');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

module.exports = {
  getProduct(productId) {
    let productData = pool.query(`SELECT * FROM productdetails WHERE productid=${productId}`);
    if (!productData) {
      throw new Error('product not found');
    }
    return productData;
  },

  insertProduct(productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder, cb) {
    pool.query('INSERT INTO productdetails (productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity], (err, result) => {
      if (err) {
        throw new Error('Error adding new product');
      } else {
        cb(null, result);
      }
    })

  },

  updateProduct(inputId, updateDetail, cb) {
    pool.query('UPDATE productdetails SET freeShipping = $1 WHERE productid=$2', [updateDetail, inputId], (err, results) => {
      if (err) {
        throw new Error('Error updating product');
      } else {
        cb(null, results);
      }
    })
  },

  deleteProduct(productId, cb) {
    pool.query('DELETE FROM productdetails WHERE productid = $1', [productId], (err, results) => {
      if (err) {
        throw new Error('Error deleting product');
      } else {
        cb(null, results);
      }
    })
  }
}
