"use strict"
 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 var lines = input.split('\n');
 let [A, B , C] = lines.shift("").split(" ")
 let [D, E , F] = lines.shift("").split(" ")
 let valorTotalPecaOne =  B * C;
 let valorTotalPecaTwo = E * F;
 let valorTotalCompra = Number(valorTotalPecaOne) + Number(valorTotalPecaTwo);
 console.log(`VALOR A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`)
