const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const a = Number(input[0].split(" ")[0]);
const b = Number(input[0].split(" ")[1]);

console.log(a + b);
