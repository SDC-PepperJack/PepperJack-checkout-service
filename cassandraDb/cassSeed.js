const cassandra = require('cassandra-driver');
const path = require('path');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'btetsy'});

const file = path.join(__dirname, '/csvFile/cassandraProductDetail.csv');

