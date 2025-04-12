"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let raio = parseInt(input)
let VOLUME = (4.0/3) * 3.14159 * (raio*raio*raio);
console.log(`VOLUME = ${VOLUME.toFixed(3)}`)