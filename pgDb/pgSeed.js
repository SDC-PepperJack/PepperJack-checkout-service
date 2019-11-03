const { Pool } = require('pg');

const client = new Pool({
  user: 'briankim',
  host: 'localhost',
  database: 'testing',
  password: '',
});

client.connect()
  .then(() => console.log('Ready to query.'))
  .then(() => {
  });

