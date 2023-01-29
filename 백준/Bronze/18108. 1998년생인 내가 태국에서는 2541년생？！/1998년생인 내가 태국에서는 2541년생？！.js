let fs = require("fs")
let input = fs.readFileSync("/dev/stdin").toString()

let result = parseInt(input) - 543;
console.log(result);