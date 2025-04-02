var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var produtoOne = parseInt(lines.shift()), produtoTwo = parseInt(lines.shift())
var PROD = produtoOne * produtoTwo
console.log("PROD = " + PROD)