const express = require('express');
const morgan = require('morgan');
const Model = require('./models.js');

const PORT = 1234;

const app = express();

app.use(morgan('combined'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/checkout/:productId/details', (req, res) => {
  const { productId } = req.params;
  Model.getProduct(productId)
    .then((product) => res.json(product))
    .catch(() => {
      res.status(404);
      res.send('Product not found');
    });
});

app.post('/api/checkout/:productId/details', (req, res) => {
  const { productId } = req.params;
  const {sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder } = req.body;
  console.log(productId);
  Model.insertProduct(productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder, (err, results) => {
    if (err) {
      console.log('Error adding', err);
    } else {
      res.send('Successful addition of new product');
    }
  });
});

app.delete('/api/checkout/:productId/details', (req, res) => {
  const { productId } = req.params;
  Model.deleteProduct(productId, (err, results) => {
    if (err) {
      console.log('Error deleting');
    } else {
      res.send('Successful deletion');
    }
  });
});


app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
