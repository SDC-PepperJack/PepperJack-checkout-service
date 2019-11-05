const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'btetsy'});


client.connect()
  .then(() => {
    console.log('Successful connection');
    client.execute(`CREATE TABLE testing (
      productId BIGINT PRIMARY KEY,
      sellerId BIGINT,
      sellerName TEXT,
      averageReviewScore BIGINT,
      numberReviews BIGINT,
      itemName TEXT,
      badge TEXT,
      itemPrice DECIMAL,
      freeShipping BOOLEAN,
      productOptions map<text, text>,
      personalization BOOLEAN,
      availableQuantity BIGINT,
      onOrder INT
    )`)
  })