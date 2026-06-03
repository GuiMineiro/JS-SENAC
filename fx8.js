const leia = require('prompt-sync')()
let nota1 = leia('Primeira nota: ')
let nota2 = leia('Segunda nota')
let media =((nota1+nota2)/2)
if (media >= 6){
    console.log("Aprovado")
}else {
    console.log('Reprovado')
}