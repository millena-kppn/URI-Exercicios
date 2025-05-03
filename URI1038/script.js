"use strict"
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let produto = lines[0].split(' ') [0] //pego minha linha separo o valor por um espaço 
let qauntidadeDeProduto = lines[0].split(' ')[1] //e acesso cada valor no Array através da posição
let precoDoLanche = 0 // criar ela fora para poder acessar em diferentes escopos e fazer a troca de valor 
    if(produto == 1){
        precoDoLanche = 4.00
    }else if(produto == 2){
        precoDoLanche = 4.50
    }else if(produto == 3){
        precoDoLanche = 5.00
    }else if(produto == 4){
        precoDoLanche == 2.00
    }else{
        precoDoLanche == 1.50
    }
    let total = produto * precoDoLanche
    console.log(`Total: R$ ${total.toFixed(2)}`)
//TERMINAR ATIVIDADE
