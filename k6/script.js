import http from "k6/http";
import { sleep } from "k6";

export let options = {
  duration: "120s",
  vus: 100
}


export default function() {
  http.get(`http://localhost:1234/api/checkout/732/details`);
  sleep(0.1);

}