"use strict"
let input = 52.000
if (input > 0 && input < 25.000){
   console.log("Intervalo (0,25]")
}else if( input > 25.001 && input < 50.000){
   console.log("Intervalo (25,50]")
}else if(input > 50.001 && input < 75.000){
   console.log("Intervalo (50,75]")
}else if(input > 75.001 && input < 100.000){
   console.log("Intervalo (75,100]")
}else{
   console.log("Fora de intervalo")
}
//testes concluir atvdd