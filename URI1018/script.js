"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let valor = parseInt(lines[0])
console.log(valor)
let cedula1 = 100, cedula2 = 50, cedula3 = 20, cedula4 = 10, cedula5 = 5, cedula6 = 2, cedula7 = 1
let calculo1 = parseInt(valor / cedula1)
valor = valor % 100
let calculo2 = parseInt(valor / cedula2)
valor = valor % 50
let calculo3 = parseInt(valor / cedula3)
valor = valor % 20
let calculo4 = parseInt(valor / cedula4)
valor = valor % 10
let calculo5 = parseInt(valor / cedula5)
valor = valor % 5
let calculo6 = parseInt(valor / cedula6)
valor = valor % 2
let calculo7 = parseInt(valor / cedula7)
valor = valor % 1
console.log(`${calculo1} nota(s) de R$ 100,00`)
console.log(`${calculo2} nota(s) de R$ 50,00`)
console.log(`${calculo3} nota(s) de R$ 20,00`)
console.log(`${calculo4} nota(s) de R$ 10,00`)
console.log(`${calculo5} nota(s) de R$ 5,00`)
console.log(`${calculo6} nota(s) de R$ 2,00`)
console.log(`${calculo7} nota(s) de R$ 1,00`)
