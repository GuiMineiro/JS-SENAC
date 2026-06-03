const leia = require('prompt-sync')()
let nome = leia('nome: ')
let idade = leia('idade: ')
console.log('olá, '+nome+' ! Você tem '+idade+' anos.')