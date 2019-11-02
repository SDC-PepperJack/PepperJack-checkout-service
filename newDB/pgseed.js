const { Pool } = require('pg');
const faker = require('faker');


const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'testing',
  password: '',
});



const text = `INSERT INTO productdetails(productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

client.connect()
  .then(() => console.log('Ready to query.'))
  .then(() => {
    for (var i = 0; i < 10000000; i++) {
      let productId = i;
      let sellerId = faker.random.number();
      let sellerName = faker.name.firstName();
      let averageReviewScore = faker.random.number();
      let numberReviews = faker.random.number();
      let itemName = faker.lorem.word();
      let badge = faker.lorem.word();
      let itemPrice = faker.random.number();
      let freeShipping = faker.random.boolean();
      let productOptions = faker.random.word();
      let personalization = faker.random.boolean();
      let availableQuantity = faker.random.number();
      let onOrder = faker.random.number();
      const data = [productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder];

      client.query(text, data)
      .then(res => console.log('Okay'))
      .catch(e => console.error(e.stack))
    }
  });



/**
 *
 */

