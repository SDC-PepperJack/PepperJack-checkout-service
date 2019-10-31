const productModel = require('../server/models.js');
const axios = require('axios');

describe('Product Model', () => {

  test('it should retrive product data from the database', async () => {
    let result = await productModel.getProduct(2);
    expect(result).toBeDefined();
    expect(result.sellerName).toBe('Cyrus Ghiassi');
    expect(result.itemPrice).toBe(141.11);
    expect(result.productOptions[0].choices[0].choice).toBe('checkerboard');
  });

});

describe('API Routes', () => {
  test('A get request to /api/checkout/:productId/details should return the requested product', async () => {
    try {
      var response = await axios.get('http://127.0.0.1:1234/api/checkout/3/details');
    } catch (err){
      console.error(err);
    }
    expect(response.data.productId).toBe(3);
    expect(response.data.sellerName).toBe('James Dunn');
  });

  test('A get request for an invalid product id should 404', async () => {
    try {
      var response = await axios.get('http://127.0.0.1:1234/api/checkout/2345/details');
    } catch (err) {
      var response = err;
    }
    expect(response.response.status).toBe(404);
    expect(response.response.statusText).toBe('Not Found');
  });

  test('A post request with an already used Id should return an error message', async() => {
    try {
      var response = await axios.post('http://127.0.0.1:1234/api/checkout/3/details');
    } catch (err) {
      var response = err;
    }
    expect(response.response.data).toBe('Error adding new product');
  });

  // test('A delete request to /api/checkout/:productId/details should return a success message', async() => {
  //   try {
  //     var response = await axios.delete('http://127.0.0.1:1234/api/checkout/1/details');
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   expect(response.status).toBe(200);
  // });

  // test('A put request to /api/checkout/:productId/details should return a success message', async() => {
  //   try {
  //     var response = await axios.put('http://127.0.0.1:1234/api/checkout/10/details');
  //   } catch (err) {
  //     var response = err;
  //   }
  //   expect(response.status).toBe(200);
  // });

});