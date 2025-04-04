"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let pecaOne = parseInt(lines[0].split(""))
let pecaOneNumb = parseInt(lines[1])
let pecaOneValue = parseFloat(lines[2])
let valueOne = pecaOneNumb * pecaOneValue
let pecaTwo = parseInt(lines[1].split(""))
let pecaTwoNumb = parseInt(lines[2])
let pecaTwoNumbValue = parseFloat(lines[3])
let valueTwo = pecaTwoNumb * pecaTwoNumbValue
let total = Number(valueOne) + Number(valueTwo)
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)