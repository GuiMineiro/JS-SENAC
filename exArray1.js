const leia = require('prompt-sync')()
let qnt = Number(leia('Quantos numeros vc vai digitar? '))
var valores = []
    for (i = 1; i<=qnt; i++ ){
        nA = Number(leia(`Digite o ${i}° numero: `))   
        valores.push(nA)
    }
var teste = 0
valores.forEach((valor) => {
    if (valor > teste){
        teste = valor
    }
})
console.log(`O maior numero é ${teste}`)