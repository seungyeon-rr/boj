let input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
let count = Number(input[0]);

for(let i = 1; i <= count; i++){
    let num = input[i].split(" ");
    let answer = Number(num[0]) + Number(num[1]);
    
    console.log(`Case #${i}: ${answer}`)
}