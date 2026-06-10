/* Leia 10 números e mostre quantos foram pares e quantos foram ímpares. */
const leia = require(`prompt-sync`)()
var pares = 0
var impares = 0 
for (i=1; i <=10; i++){
    var numero = Number(leia(`Digite o ${i}° número`))
    if (numero%2 == 0 ){
        pares = pares + 1
    } else {
        impares = impares + 1 
    }
}
console.log(`${pares} foram pares \n${impares} foram impares`)