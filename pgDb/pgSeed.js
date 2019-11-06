const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

const file = path.join(__dirname, '/csvFile/pgProductDetail.csv');
// console.log(file);

pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY productdetails FROM '${file}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error', err))