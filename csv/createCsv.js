
const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('pgProductDetail.csv');
// writeUsers.write('productId ,sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder\n', 'utf8');

function writeProducts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let productId = id;
      let sellerId = faker.random.number();
      let sellerName = faker.name.firstName();
      let averageReviewScore = faker.random.number();
      let numberReviews = faker.random.number();
      let itemName = faker.lorem.word();
      let badge = faker.lorem.word();
      let itemPrice = faker.finance.amount(5, 1000, 2);
      let freeShipping = faker.random.boolean();
      let optionName = faker.lorem.word();
      let choice = faker.lorem.word();
      let adjustedPrice = faker.finance.amount(5, 1000, 2);
      let productOptions = JSON.stringify([{optionName, choices: [{choice, adjustedPrice }]}]);
      let personalization = faker.random.boolean();
      let availableQuantity = faker.random.number();
      let onOrder = faker.random.number();

      const data = `${productId}, ${sellerId}, ${sellerName}, ${averageReviewScore}, ${numberReviews}, ${itemName}, ${badge}, ${itemPrice}, ${freeShipping}, "${productOptions}", ${personalization}, ${availableQuantity}, ${onOrder} \n`;

      if ( i === 0) {
        // i has reached 0, so write the data invoke writeUsers.end()
        writer.write(data, encoding, callback);
      } else {
        // i hasn't reached 0 yet, so write the data and continue
        // don't pass in the callback
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i >0) {
      // pauses the write process when buffer is full
      // once drain is fired, process continues until all records have been written
        // drain event is for when a writable stream's internal buffer has been emptied
          // when highWaterMark prop (max bytes of data that can be stored inside internal buffer) is exceeded
      writer.once('drain', write);
    }
  }
  write();
}

writeProducts(writeUsers, 'utf-8', () => {
  writeUsers.end();
});