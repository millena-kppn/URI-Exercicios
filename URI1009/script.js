"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let nome = lines[0];
let salarioFixo = lines[1];
let vendas = lines[2];
let totalSalario = salarioFixo + (vendas * 0.15);
console.log(`TOTAL = R$ ${totalSalario}`);