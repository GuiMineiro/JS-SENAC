const leia = require('prompt-sync')()
let n1 =leia('Digite um numero')
if (n1 %2 != 0){
    console.log('impar')
}else{
    console.log('par')
}