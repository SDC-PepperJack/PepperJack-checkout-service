import http from "k6/http";
import { sleep } from "k6";

export let options = {
  duration: "120s",
  vus: 10
}


export default function() {
  http.get(`http://localhost:1234/api/checkout/1/details`);
  sleep(1);

}