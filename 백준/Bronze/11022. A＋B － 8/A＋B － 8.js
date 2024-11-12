let input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

for(let i = 1; i <= input[0]; i++){
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);

    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`)
}