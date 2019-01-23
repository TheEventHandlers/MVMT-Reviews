import http from "k6/http";
import { sleep } from "k6";

export default function() {
	const min = 100;
  const max = 10000000;
  const randomWatchId = Math.floor(Math.random() * (max - min + 1)) + min;
  http.get(`http://localhost:3004/api/watches/${randomWatchId}/reviews`);
  sleep(1);
};