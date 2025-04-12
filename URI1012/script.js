"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [A, B , C] = input.split(" ").map(item => parseFloat(item))
let pi = 3.14159
let resA = (A * C) / 2.0
let resB = pi * (C * C)
let resC = ((A + B) * C) / 2.0
let resD = B * B
let resE = A * B
console.log(`TRIANGULO: ${resA.toFixed(3)}\nCIRCULO: ${resB.toFixed(3)}\nTRAPEZIO: ${resC.toFixed(3)}\nQUADRADO: ${resD.toFixed(3)}\nRETANGULO: ${resE.toFixed(3)}`)
