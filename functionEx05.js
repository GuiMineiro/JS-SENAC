const leia = require('prompt-sync')()
function calcularIdade (senac){
   let idade = 2026 - senac
   return idade
}
let anoNascimento = Number(leia('Em que ano voce nasceu? '))
let anos = calcularIdade(anoNascimento)
console.log(`Você tem ${anos} anos`)