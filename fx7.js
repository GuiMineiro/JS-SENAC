const leia = require('prompt-sync')()
let idade = leia('Digite a idade: ')
if (idade < 18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')
}