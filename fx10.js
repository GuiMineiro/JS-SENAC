const leia = require('prompt-sync')()
let salario = Number(leia('Digite o salario'))
if (salario <=1000){ 
    console.log(salario*1.15)
}else {
    console.log(salario*1.10)
}