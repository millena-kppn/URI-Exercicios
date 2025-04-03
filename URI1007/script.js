"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines[0]), B = parseInt(lines[1]), C = parseInt(lines[2]), D = parseInt(lines[3]);
let DIFERENCA = (A * B - C * D)
console.log(`DIFERENCA = ${DIFERENCA}`)