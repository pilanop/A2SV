/** @format */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (answer) {
  var [a, b] = answer.split(" ");
  console.log(Math.floor((a * b * 2) / 4));
});
