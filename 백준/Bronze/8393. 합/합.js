let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let numInput = Number(input);
answer = 0;

for(let i = 1; i<=numInput; i++) {
  answer += i;
}

console.log(answer);