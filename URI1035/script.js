"use strict"
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
// let [A, B , C, D] = input.split(" ").map(item => parseInt(item))
   let A = 5,B = 6,C = 7,D = 8 
   let somaCD = Number(C) + Number(D)
   let somaAB = Number(A) + Number(B)
   let par = Number(A) % 2
   if(B > C && D > A && somaCD > somaAB && C > 0 && D > 0 && par == 0){
      console.log("Valores aceitos")
   }else{
      console.log("Valores nao aceitos")
   }
// if(B > C){
//    console.log("Valores aceitos")
// }else{
//    console.log("Valores nao aceitos")
// }
// if (D > A){
//    console.log("Valores aceitos")
// }else{
//    console.log("Valores nao aceitos")
// }
// if (somaCD > somaAB){
//    console.log("Valores aceitos")
// }   else{
//    console.log("Valores nao aceitos")
// }
// if(C,D > 0){
//    console.log("Valores aceitos")
// }
// else{
//    console.log("Valores nao aceitos")
// }
// if(A == 0){
//    console.log("Valores aceitos")
// }else{
//    console.log("Valores nao aceitos") 
// }