const leia = require('prompt-sync')()
var guard = 0
var semana = 0
for (guard = 0; guard < 100; guard+=5){
    semana = semana+1
}
console.log(`Foram necessarias ${semana} semanas para juntar R$${guard}`)
