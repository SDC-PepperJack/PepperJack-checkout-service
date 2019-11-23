const fs = require('fs');
var dataGenerator = require('./csvHelpers.js');
const faker = require('faker');
dataGenerator = new dataGenerator();

// const writeUsers = fs.createWriteStream('pgProductDetail.csv');
// function writeProducts(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;

//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       let tableid = id;
//       let productId = id;
//       let sellerId = dataGenerator.generateSellerId();
//       let sellerName = dataGenerator.generateSellerName();
//       let averageReviewScore = dataGenerator.generateAverageReviewScore();
//       let numberReviews = dataGenerator.generateNumReviews();
//       let itemName = faker.lorem.word();
//       let freeShipping = dataGenerator.generateBoolean();
//       let personalization = dataGenerator.generateBoolean();
//       let availableQuantity = dataGenerator.generateAvailableQuantity();
//       let onOrder = faker.random.number();
//       let itemPrice = faker.finance.amount(5, 100, 2);

//       const data = `${tableid},${productId},${sellerId},${sellerName},${averageReviewScore},${numberReviews},${itemName},${freeShipping},${personalization}, ${availableQuantity}, ${onOrder}, ${itemPrice}\n`;

//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeProducts(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// BADGES CSV
// let badges = ["Bestseller", "Badseller", null];
// const writeUsers = fs.createWriteStream('pgProductBadges.csv');
// function writeBadges(writer, encoding, callback) {
//   let i = 10000001;
//   let id = 0;

//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 1; j <= badges.length; j++) {
//         let data = `${id},${i},${badges[j]}\n`;
//         if (i === 1) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }
//       }
//     } while (i > 1 && ok);
//     if ( i > 1) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeBadges(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// })


// SIZES CSV
// let sizes = ["extra_small", "small", "medium", "large", "extra_large"];
// const writeUsers = fs.createWriteStream('pgProductSizes.csv');
// function writeSizes(writer, encoding, callback) {
//   let i = 10000001;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1; // size id
//       for (var j = 1; j <= sizes.length; j++) {
//         let data = `${id},${i},${sizes[j]}\n`;

//         if ( i === 1) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }

//       }

//     } while (i > 1 && ok);
//     if (i >1) {
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
//   let i = 10000001;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 1; j < materials.length; j++) {
//         let data = `${id},${i},${materials[j]}\n`;
//           if ( i === 1) {
//             writer.write(data, encoding, callback);
//           } else {
//             ok = writer.write(data, encoding);
//           }
//       }
//     } while (i > 1 && ok);
//     if (i >1) {
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
//   let i = 10000001;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       for (var j = 1; j < patterns.length; j++) {
//         let data = `${id}, ${i}, ${patterns[j]}\n`;
//         if ( i === 1) {
//           writer.write(data, encoding, callback);
//         } else {
//           ok = writer.write(data, encoding);
//         }
//       }

//     } while (i > 1 && ok);
//     if (i >1) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writePatterns(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// FONTS
let fonts = ['serif', 'comic_sans', 'typewriter', 'cursive', 'star_wars'];
const writeUsers = fs.createWriteStream('pgProductFonts.csv');
function writeFonts(writer, encoding, callback) {
  let i = 10000001;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (var j = 1; j < fonts.length; j++) {
        let data = `${id}, ${i},${fonts[j]}\n`;
        if ( i === 1) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }

    } while (i > 1 && ok);
    if (i >1) {
      writer.once('drain', write);
    }
  }
  write();
}

writeFonts(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
