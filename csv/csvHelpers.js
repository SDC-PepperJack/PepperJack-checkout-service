const dataSources = require('./csvData.js');

class dataGenerator {
  constructor() {
    this.sellerNames = dataSources.sellerNames;
    this.productNames = dataSources.productNames;
    this.badges = ['Bestseller', 'Badseller', null];
    this.productOptions = dataSources.productOptions;
  }

  getRandomInt(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
  }

  generateSellerId() {
    return this.getRandomInt(1,1000);
  }

  generateSellerName() {
    let nameIdx = this.getRandomInt(0, this.sellerNames.length);
    return this.sellerNames[nameIdx];
  }

  generateAverageReviewScore() {
    return this.getRandomInt(1, 6);
  }

  generateNumReviews() {
    return this.getRandomInt(0, 5001);
  }

  generateProductName() {
    const nameIdx = this.getRandomInt(0, this.productNames.length);
    return this.productNames[nameIdx];
  }

  generateBadge() {
    const badgeIdx = this.getRandomInt(0, this.badges.length);
    return this.badges[badgeIdx];
  }

  generateItemPrice(lowerLimit, upperLimit) {
    let price = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
    return Number(price.toFixed(2));
  }

  generateBoolean() {
    return Boolean(this.getRandomInt(0, 2));
  }

  generateAvailableQuantity() {
    return this.getRandomInt(1, 201);
  }

  generateOnOrderQuantity() {
    return this.getRandomInt(0, 26);
  }
}

module.exports = dataGenerator;


