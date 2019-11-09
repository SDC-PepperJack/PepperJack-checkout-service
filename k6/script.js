import http from "k6/http";
import { sleep } from "k6";

export let options = {
  duration: "1000s",
  rps: 100,
  vus: 500
}


// GET Request
export default function() {
  var i = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:1234/api/checkout/${i}/details`);
  sleep(0.2);
}

// POST Request
// export default function() {
//   var i = Math.floor(Math.random() * 1000000) + 10000001;
//   var url = `http://localhost:1234/api/checkout/${i}/details`;
//   var payload = JSON.stringify(
//     {
//       sellerId: i,
//       sellerName: "Brian",
//       averageReviewScore: 4234,
//       numberReviews: 4234234,
//       itemName: "hotwhitefor",
//       badge: "Bestseller",
//       itemPrice: 3084324.31,
//       freeShipping: true,
//       productOptions: "[optionName: tenfouras, choice: [{ qualityassurance, 12343.234}]]",
//       personalization: true,
//       availableQuantity: 233123,
//       onOrder: 832,
//     });
//   var params = {headers: {"Content-Type": "application/json"}}
//   http.post(url, payload, params);
//   sleep(0);
// }
