"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
// let valor = 576.73 valor para fazer teste
let valor = parseFloat(lines[0])
let nota100, nota50, nota20, nota10, nota5, nota2
let moeda1,moeda050,moeda025, moeda010, moeda005,moeda001
nota100 = parseInt(valor / 100)
valor = valor % 100
nota50 = parseInt(valor / 50)
valor = valor % 50
nota20= parseInt(valor / 20)
valor = valor % 20
nota10 = parseInt(valor / 10)
valor = valor % 10
nota5 = parseInt(valor / 5)
valor = valor % 5
nota2 = parseInt(valor / 2)
valor = valor % 2
moeda1 = parseInt(valor / 1)
valor = valor % 1
moeda050 = parseInt(valor / 0.50)
valor = valor % 0.50
moeda025 = parseInt(valor / 0.25)
valor = valor % 0.25
moeda010 = parseInt(valor / 0.10)
valor = valor % 0.10
moeda005 = parseInt(valor / 0.05)
valor = valor % 0.05
moeda001 = parseInt(valor / 0.01)
valor = valor % 0.01
console.log(`NOTAS:\n${nota100} nota(s) de R$ 100.00\n${nota50} nota(s) de R$ 50.00\n${nota20} nota(s) de R$ 20.00\n${nota10} nota(s) de R$ 10.00\n${nota5} nota(s) de R$ 5.00\n${nota2} nota(s) de R$ 2.00`)
console.log(`MOEDAS:\n${moeda1} moeda(s) de R$ 1.00\n${moeda050} moeda(s) de R$ 0.50\n${moeda025} moeda(s) de R$ 0.25\n${moeda010} moeda(s) de R$ 0.10\n${moeda005} moeda(s) de R$ 0.05\n${moeda001.toFixed(0)} moeda(s) de R$ 0.01`)





