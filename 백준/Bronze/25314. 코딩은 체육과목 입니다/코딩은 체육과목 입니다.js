let fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString();

console.log("long ".repeat(n/4) + 'int')