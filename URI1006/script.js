"use sctrict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines[0]), B = parseFloat(lines[1]), C = parseFloat(lines[2]);
let MEDIA = (A * 2 + B * 3 + C * 5) / 10;
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)