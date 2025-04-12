"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let x = parseInt(lines[0])
let y = parseFloat(lines[1])
let gasto = x / y
console.log(`${gasto.toFixed(3)} km/l`)

