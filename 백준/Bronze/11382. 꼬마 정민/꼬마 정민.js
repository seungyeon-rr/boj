const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(arr[0] + arr[1] + arr[2]);