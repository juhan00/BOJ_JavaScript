const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = Number(input[0].split(" ")[0]);
const b = Number(input[0].split(" ")[1]);
const c = Number(input[0].split(" ")[2]);
const arr = [a, b, c];
let reward = 0;

if (a === b && b === c) {
  reward = 10000 + a * 1000;
} else if (a === b || a === c) {
  reward = 1000 + a * 100;
} else if (b === c) {
  reward = 1000 + b * 100;
} else {
  reward = Math.max(...arr) * 100;
}

console.log(reward);
