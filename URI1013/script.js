"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = input.split(" ").map(item => parseInt(item))
let maiorEntreAeB =  (A + B + Math.abs(A - B)) /2
let maiorEntreC = (C + maiorEntreAeB + Math.abs(C - maiorEntreAeB)) /2
console.log(`${maiorEntreC} eh o maior`)