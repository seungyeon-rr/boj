const input = require('fs').readFileSync(0).toString().split('\n');
let x = input[0];
let y = input[1];

if (x > 0 && y > 0) {
	console.log(1);
} else if (x < 0 && y > 0) {
	console.log(2);
} else if (x < 0 && y < 0) {
	console.log(3);
} else {
	console.log(4);
}