"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let nome = lines[0];
let salarioFixo = parseFloat(lines[1]);
let vendas = parseFloat(lines[2]);
let TOTAL= salarioFixo + (vendas * 0.15);
console.log("TOTAL = R$ " + TOTAL.toFixed(2));