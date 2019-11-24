const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});


const fileProduct = path.join(__dirname + '/csvFile/pgProductDetail.csv');
const fileSizes = path.join(__dirname, '/csvFile/pgProductSizes.csv');
const fileMaterials = path.join(__dirname, '/csvFile/pgProductMaterials.csv');
const fileBadges = path.join(__dirname, '/csvFile/pgProductBadges.csv');
const filePatterns = path.join(__dirname, '/csvFile/pgProductPatterns.csv');
const fileFonts = path.join(__dirname, '/csvFile/pgProductFonts.csv');


pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY productdetails FROM '${fileProduct}' CSV`))
  .then(() => pool.query(`COPY badge FROM '${fileBadges}' CSV`))
  .then(() => pool.query(`COPY size FROM '${fileSizes}' CSV`))
  .then(() => pool.query(`COPY material FROM '${fileMaterials}' CSV`))
  .then(() => pool.query(`COPY font FROM '${fileFonts}' CSV`))
  .then(() => pool.query(`COPY pattern FROM '${filePatterns}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error', err))