const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'test'});


const query = 'SELECT username, password FROM test.testing';
client.connect()
  .then(() => {
    console.log('Successful connection');
    client.execute(query)
      .then(result => console.log('Users ', result.rows[0]))
  })
  .catch((err) => {
    console.log('There was an error:', err);
  })