const fs = require('fs');
const input = fs.readFileSync(0,'utf8').toString().trim().split(' ')

const chess = [1,1,2,2,2,8]

let result = ''

for(i = 0; i < chess.length; i++){
    cal = (parseInt(chess[i]) - parseInt(input[i]))
    result += cal + ' ' 
}

console.log(result)