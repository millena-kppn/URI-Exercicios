"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [A, B , C] = parseFloat(lines.shift("").split(" "))
let resA = (A * C) / 2.0;//
let resB = 3.1415 * (C * C);//
let resC = (A + B) * C / 2.0;
let resD = B * B;
let resE = A * B;
console.log(`TRIANGULO: ${resA.toFixed(3)}\nCIRCULO: ${resB.toFixed(3)}\nTRAPEZIO: ${resC.toFixed(3)}\nQUADRADO: ${resD.toFixed(3)}\nRETANGULO: ${resE.toFixed(3)}`)
