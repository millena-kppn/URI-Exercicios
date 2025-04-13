"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let km = input.lines.shift()
let minutos = km * 2
console.log(`${minutos} minutos`)
