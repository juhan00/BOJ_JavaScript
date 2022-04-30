const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const number = input[0].split(" ");
const minNumber = Math.min(...number);
const maxNumber = Math.max(...number);

console.log(minNumber + " " + maxNumber);
