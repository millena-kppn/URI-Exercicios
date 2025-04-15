"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


// 10.0 20.1 5.1 valores 

// let A = parseFloat(lines[0].shift().split(" "))
// let B = parseFloat(lines[1].shift().split(" "))
// let C = parseFloat(lines[2].shift().split(" "))


let A = 10.0, B = 20.1, C = 5.1
let valor = (B * B) - (4 * A * C)
if (valor <= 0){
console.log("Pode calcular!")
}else{
    console.log("Não pode calcular!")

}