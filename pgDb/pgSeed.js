const { Pool } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
const path = require('path');

const pool = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

const file = path.join(__dirname, '/csvFile/productDetail.csv');
// console.log(file);

// pool.connect((err, client) => {
//   var stream = client.query(copyFrom(`COPY productdetails FROM STDIN CSV`)); // STDIN specifies input that comes from client app. Add CSV to the end or else it'll expect a TSV
//   var fileStream = fs.createReadStream(file);
//   fileStream.on('error', (err) => {
//     console.log(`Error reading file: ${err}`);
//   });
//   stream.on('error', (err) => {
//     console.log(`Error copying: ${err}`);
//   });
//   stream.on('end', () => {
//     console.log('Completed copying data into productDetails');
//   });
//   fileStream.pipe(stream);
//   fileStream.on('end', () => {
//     console.log(`Data imported`);
//   });
// });

pool.connect()
  .then(() => console.log('Ready to insert'))
  .then(() => pool.query(`COPY productdetails FROM '${file}' CSV`))
  .then(() => console.log('Data imported'))
  .catch((err) => console.log('Error', err))