const fs = require('fs');
var dataGenerator = require('./csvHelpers.js');
const faker = require('faker');
const writeUsers = fs.createWriteStream('pgProductDetail.csv');
// const writeUsers = fs.createWriteStream('testProductDetail.csv');
dataGenerator = new dataGenerator();

function writeProducts(writer, encoding, callback) {
  function getBadge() {
    var badges = ['Bestseller', 'Badseller', null];
    return badges[Math.floor(Math.random() * badges.length)];
  }
  function getChoices() {
    var choices = ['extra_small', 'small', 'medium', 'large', 'extra_large', 'ash', 'walnut', 'ebony', 'aluminum', 'brushed_steel', 'glass', 'solid_titanium', 'pure_gold','solid_diamond', 'checkerboard', 'argile', 'striped_vertical', 'striped_horizontal', 'stars', 'bars', 'tie_dye', 'serif', 'comic_sans', 'typewriter', 'cursive', 'star_wars'];

    return choices[Math.floor(Math.random() * choices.length)];
  }

  function getOptionName() {
    var options = ['Size', 'Material', 'Pattern', 'Font_Design'];
    return options[Math.floor(Math.random() * options.length)];
  }

  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let productId = id;
      let sellerId = dataGenerator.generateSellerId();
      let sellerName = dataGenerator.generateSellerName();
      let averageReviewScore = dataGenerator.generateAverageReviewScore();
      let numberReviews = dataGenerator.generateNumReviews();
      let itemName = faker.lorem.word();
      let itemPrice = dataGenerator.generateItemPrice(10, 301);
      let badge = getBadge();
      let freeShipping = dataGenerator.generateBoolean();
      let availableQuantity = dataGenerator.generateAvailableQuantity();
      let productOptions = JSON.stringify([{optionName: getOptionName(), choices: getChoices()}])

      const data = `${productId}, ${sellerId}, ${sellerName}, ${averageReviewScore}, ${numberReviews}, ${itemName}, ${itemPrice},${badge}, ${freeShipping}, ${availableQuantity}, "${productOptions}"\n`;

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

// SIZES CSV
// let sizes = ["extra-small", "small", "medium", "large", "extra_large"];
// const writeUsers = fs.createWriteStream('pgProductSizes.csv');
// function writeSizes(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1; // size id
//       for (var j = 0; j < sizes.length; j++) {
//         let data = `${id}, ${j}\n`;

//         if ( i === 0) {
//           // i has reached 0, so write the data invoke writeUsers.end()
//           writer.write(data, encoding, callback);
//         } else {
//           // i hasn't reached 0 yet, so write the data and continue
//           // don't pass in the callback
//           ok = writer.write(data, encoding);
//         }

//       }

//     } while (i > 0 && ok);
//     if (i >0) {
//       // pauses the write process when buffer is full
//       // once drain is fired, process continues until all records have been written
//         // drain event is for when a writable stream's internal buffer has been emptied
//           // when highWaterMark prop (max bytes of data that can be stored inside internal buffer) is exceeded
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeSizes(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// MATERIALS CSV
// const writeUsers = fs.createWriteStream('pgProductMaterials.csv');
// let materials = ['ash', 'walnut', 'ebony', 'aluminum', 'brushed_steel', 'glass', 'solid_titanium', 'pure_gold', 'solid_diamond'];
// function writeMaterials(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 0; j < materials.length; j++) {
//         let data = `${id}, ${j}\n`;
//           if ( i === 0) {
//             writer.write(data, encoding, callback);
//           } else {
//             ok = writer.write(data, encoding);
//           }
//       }
//     } while (i > 0 && ok);
//     if (i >0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeMaterials(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// // PATTERNS CSV
// let patterns = ['checkboard', 'argile', 'striped_vertical', 'striped_horizontal', 'stars', 'bars', 'tie_dye'];
// const writeUsers = fs.createWriteStream('pgProductPatterns.csv');
// function writePatterns(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 0; j < patterns.length; j++) {
//         let data = `${id}, ${j}\n`;
//         if ( i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }
//       }

//     } while (i > 0 && ok);
//     if (i >0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writePatterns(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// // FONTS
// let fonts = ['serif', 'comic_sans', 'typewriter', 'cursive', 'star_wars'];
// const writeUsers = fs.createWriteStream('pgProductFonts.csv');
// function writeFonts(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 0; j < fonts.length; j++) {
//         let data = `${id}, ${j}\n`;
//         if ( i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }
//       }

//     } while (i > 0 && ok);
//     if (i >0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeFonts(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// BADGES
// let badges = ['Bestseller','Badseller', null];
// const writeUsers = fs.createWriteStream('pgProductBadges.csv');
// function writeBadges(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 0; j < badges.length; j++) {
//         let data = `${id}, ${j}\n`;
//         if ( i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }
//       }

//     } while (i > 0 && ok);
//     if (i >0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeBadges(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

