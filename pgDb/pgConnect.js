const { Pool } = require('pg');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

pool.connect()
  .then(() => console.log('Ready to create'))
  .then(() => pool.query(`
    CREATE TABLE productDetails(
      productId SERIAL PRIMARY KEY NOT NULL,
      sellerId INT NOT NULL,
      sellerName VARCHAR(50),
      averageReviewScore INT NOT NULL,
      numberReviews INT NOT NULL,
      itemName VARCHAR(50) NOT NULL,
      itemPrice DECIMAL NOT NULL,
      badge VARCHAR(50) NOT NULL,
      freeShipping BOOLEAN,
      productOptions text,
      personalization BOOLEAN,
      availableQuantity INT NOT NULL,
      onOrder INT NOT NULL
    )
  `))
  .then(() => console.log('Table created'));

// CREATE UNIQUE INDEX ON productId