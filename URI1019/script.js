"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let qtdSegundos = parseInt(lines[0])
let qtdHora = parseInt(qtdSegundos / 3600) 
qtdSegundos = qtdSegundos % 3600 
let qntMinutos = parseInt(qtdSegundos / 60)
qtdSegundos = qtdSegundos % 60
console.log(`${qtdHora} : ${qntMinutos} : ${qtdSegundos}`)
// let qtdSegundos = 556 //vou quebrando o meu valor para obter varios resultados 
//3600 é min multiplicado por segundos