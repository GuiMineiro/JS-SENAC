const leia = require(`prompt-sync`)()
var numero = Number(leia(`Digite um numero para ver seu fatorial`))
var fatorial = 1
for (i = numero; i != 0; i--){
    fatorial = fatorial*i
}
console.log(`o fatorial de ${numero} é ${fatorial}`)
