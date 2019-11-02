const { Pool } = require('pg');

const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'testing',
  password: '',
});

client.connect()
  .then(() => console.log('connected!'))
  .then(() => {
    client.query(`CREATE TABLE productDetails (
      productId BIGSERIAL PRIMARY KEY,
      sellerId BIGINT UNIQUE,
      sellerName VARCHAR(50),
      averageReviewScore BIGINT,
      numberReviews BIGINT,
      itemName VARCHAR(50),
      badge VARCHAR(50),
      itemPrice DECIMAL,
      freeShipping BOOLEAN,
      productOptions VARCHAR(50),
      personalization BOOLEAN,
      availableQuantity BIGINT,
      onOrder INT
    )`);
  });

