const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'btetsy',
  password: '5896',
});

// WITHOUT EC2
// const fileProduct = path.join(__dirname + '/csvFile/pgProductDetail.csv');

// FOR EC2
const fileProduct = '/Users/briankim/Desktop/SDC/BTetsy-checkout-service/pgProductDetail.csv'
// console.log(__dirname);
// console.log(fileProduct);


const fileSizes = path.join(__dirname, '/csvFile/pgProductSizes.csv');
const fileMaterials = path.join(__dirname, '/csvFile/pgProductMaterials.csv');
const filePatterns = path.join(__dirname, '/csvFile/pgProductPatterns.csv');
const fileFonts = path.join(__dirname, '/csvFile/pgProductFonts.csv');
const fileBadges = path.join(__dirname, '/csvFile/pgProductBadges.csv');

// console.log(fileProduct);
pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY productdetails FROM '${fileProduct}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error', err))