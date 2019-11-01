const { Pool } = require('pg');

const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'testing',
  password: '',
});

client.connect()
  .then(() => console.log('connected!'));
  .then(() => {
    client.query(`CREATE TABLE productDetails (

    )`)
  });

