const leia = require('prompt-sync')()
r = 0
do{
    var numero = Number(leia('Digite um numero: '))
    r = r +1
} while (numero != 0)
    console.log(`vc digitou ${r-1} numeros`)