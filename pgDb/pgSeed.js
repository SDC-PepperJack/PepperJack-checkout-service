const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

// const fileProduct = path.join(__dirname + '/csvFile/testProductDetail.csv');
const fileProduct = path.join(__dirname, '/csvFile/pgProductDetail.csv');
const fileSizes = path.join(__dirname, '/csvFile/pgProductSizes.csv');
const fileMaterials = path.join(__dirname, '/csvFile/pgProductMaterials.csv');
const filePatterns = path.join(__dirname, '/csvFile/pgProductPatterns.csv');
const fileFonts = path.join(__dirname, '/csvFile/pgProductFonts.csv');
const fileBadges = path.join(__dirname, '/csvFile/pgProductBadges.csv');

pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY productdetails FROM '${fileProduct}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error', err))