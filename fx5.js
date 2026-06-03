const leia = require('prompt-sync')()
let n1 = Number(leia('Digite um nomero'))
if (n1>0){
    console.log('positivo')
}else if (n1<0){
    console.log('negativo')
}else{
    console.log('0')
}