"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let qntdDias = parseInt(lines[0])
let qtdAnos, qtdMeses
qtdAnos = parseInt(qntdDias /365)
qntdDias = qntdDias % 365
qtdMeses = parseInt(qntdDias / 30)
qntdDias = qntdDias % 30
console.log(`${qtdAnos} ano(s)`)
console.log(`${qtdMeses} mes(es)`)
console.log(`${qntdDias} dia(s)`)
