"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseInt(lines[0]);
let horas = parseInt(lines[1]);
let horaValor = parseFloat(lines[2]);
let salario = horas * horaValor;
console.log(`NUMBER = ${number}\nSALARY = U$ ${salario.toFixed(2)}`);