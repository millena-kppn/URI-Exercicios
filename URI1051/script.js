"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = lines[0]
var novoSalario = 0
if(salario => 0.00 && salario <= 2000.00){
novoSalario = (salario * 0.08) + salario
alert(`R$ ${novoSalario}`)
}else if(salario >= 2000.01 && 3000.00){
}