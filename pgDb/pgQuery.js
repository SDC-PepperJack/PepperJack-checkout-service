const { Pool } = require('pg');

const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'btetsy',
  password: '',
});

client.connect()
  .then(() => console.log('Ready to query'))
  .then(() => {
    client.query(`SELECT * FROM productdetails WHERE productId = 7938483`);
  })
  .catch((err) => {
    console.log('Error querying: ', err);
  })

