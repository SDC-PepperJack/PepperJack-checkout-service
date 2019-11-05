const { Pool } = require('pg');

const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

client.connect()
  .then(() => console.log('connected!'))
  .then(() => {
    client.query(`CREATE TABLE productDetails (
      productId BIGSERIAL PRIMARY KEY,
      sellerId BIGINT,
      sellerName VARCHAR(50),
      averageReviewScore BIGINT,
      numberReviews BIGINT,
      itemName VARCHAR(50),
      badge VARCHAR(50),
      itemPrice DECIMAL,
      freeShipping BOOLEAN,
      productOptions text ARRAY[2],
      personalization BOOLEAN,
      availableQuantity BIGINT,
      onOrder INT
    )`);
  });
