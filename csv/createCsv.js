const fs = require('fs');
var dataGenerator = require('./csvHelpers.js');
// const writeUsers = fs.createWriteStream('pgProductDetail.csv');

dataGenerator = new dataGenerator();

// function writeProducts(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       let productId = id;
//       let sellerId = dataGenerator.generateSellerId();
//       let sellerName = dataGenerator.generateSellerName();
//       let averageReviewScore = dataGenerator.generateAverageReviewScore();
//       let numberReviews = dataGenerator.generateNumReviews();
//       let itemName = dataGenerator.generateProductName();
//       let itemPrice = dataGenerator.generateItemPrice(10, 301);
//       let freeShipping = dataGenerator.generateBoolean();
//       let personalization = dataGenerator.generateBoolean();
//       let availableQuantity = dataGenerator.generateAvailableQuantity();
//       let onOrder = dataGenerator.generateOnOrderQuantity();

//       const data = `${productId}, ${sellerId}, ${sellerName}, ${averageReviewScore}, ${numberReviews}, ${itemName}, ${itemPrice}, ${freeShipping}, ${personalization}, ${availableQuantity}, ${onOrder} \n`;

//       if ( i === 0) {
//         // i has reached 0, so write the data invoke writeUsers.end()
//         writer.write(data, encoding, callback);
//       } else {
//         // i hasn't reached 0 yet, so write the data and continue
//         // don't pass in the callback
//         ok = writer.write(data, encoding);
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

// writeProducts(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// SIZES CSV
let sizes = ["extra-small", "small", "medium", "large", "extra_large"];
const writeUsers = fs.createWriteStream('pgProductSizes.csv');
function writeSizes(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1; // size id
      for (var j = 0; j < sizes.length; j++) {
        let data = `${id}, ${j}\n`;

        if ( i === 0) {
          // i has reached 0, so write the data invoke writeUsers.end()
          writer.write(data, encoding, callback);
        } else {
          // i hasn't reached 0 yet, so write the data and continue
          // don't pass in the callback
          ok = writer.write(data, encoding);
        }

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

writeSizes(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

// MATERIALS CSV
const writeUsers = fs.createWriteStream('pgProductMaterials.csv');
let materials = ['ash', 'walnut', 'ebony', 'aluminum', 'brushed_steel', 'glass', 'solid_titanium', 'pure_gold', 'solid_diamond'];
function writeMaterials(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (var j = 0; j < materials.length; j++) {
        let data = `${id}, ${j}\n`;
          if ( i === 0) {
            // i has reached 0, so write the data invoke writeUsers.end()
            writer.write(data, encoding, callback);
          } else {
            // i hasn't reached 0 yet, so write the data and continue
            // don't pass in the callback
            ok = writer.write(data, encoding);
          }
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

writeMaterials(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

// PATTERNS CSV
// let patterns = ['checkboard', 'argile', 'striped_vertical', 'striped_horizontal', 'stars', 'bars', 'tie_dye'];
function writePatterns(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (var j = 0; j < patterns.length; j++) {
        let data = `${id}, ${j}\n`;
        if ( i === 0) {
          // i has reached 0, so write the data invoke writeUsers.end()
          writer.write(data, encoding, callback);
        } else {
          // i hasn't reached 0 yet, so write the data and continue
          // don't pass in the callback
          ok = writer.write(data, encoding);
        }
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

writePatterns(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

// FONTS
let fonts = ['serif', 'comic_sans', 'typewriter', 'cursive', 'star_wars'];
function writeFonts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      for (var j = 0; j < fonts.length; j++) {
        let data = `${id}, ${j}\n`;
        if ( i === 0) {
          // i has reached 0, so write the data invoke writeUsers.end()
          writer.write(data, encoding, callback);
        } else {
          // i hasn't reached 0 yet, so write the data and continue
          // don't pass in the callback
          ok = writer.write(data, encoding);
        }
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

writeFonts(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
