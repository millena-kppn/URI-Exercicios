"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let hora = parseInt(lines[0])
let km = parseInt(lines[1])
let litros = (hora * km) /12
console.log(litros.toFixed(3))
