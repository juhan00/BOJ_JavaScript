const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const maxNumber = String(Math.max(...input));
const numberCnt = Number(input.indexOf(maxNumber)) + 1;

console.log(maxNumber);
console.log(numberCnt);
