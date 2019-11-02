const faker = require('faker');
// const createCsvWriter = require('csv-writer').createArrayCsvWriter; // doesn't append but works
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const csvWriter = createCsvWriter({
  header: ['productId', 'sellerId', 'sellerName', 'averageReviewScore', 'numberReviews', 'itemName', 'badge', 'itemPrice', 'freeShipping', 'productOptions', 'personalization', 'availableQuantity', 'onOrder'],
  path: './data3.csv',
  append: true,
});

let sellerId = faker.random.number();
let sellerName = faker.name.firstName();
let averageReviewScore = faker.random.number();
let numberReviews = faker.random.number();
let itemName = faker.lorem.word();
let badge = faker.lorem.word();
let itemPrice = faker.random.number();
let freeShipping = faker.random.boolean();
let productOptions = faker.random.word();
let personalization = faker.random.boolean();
let availableQuantity = faker.random.number();
let onOrder = faker.random.number();


const csvConverter = (n) => {
    for (var i = 230414; i < n; i++) {
      let productId = i; // must be unique

      const records = [
        [productId, sellerId, sellerName, averageReviewScore, numberReviews, itemName, badge, itemPrice, freeShipping, productOptions, personalization, availableQuantity, onOrder]
      ];

      csvWriter.writeRecords(records);
    }
}

csvConverter(250000);
