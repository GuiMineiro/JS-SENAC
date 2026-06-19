const leia = require('prompt-sync')()
function calcularMedia(a,b,c){
   let media = (a + b + c)/3
   return media
}
 let n1 = Number(leia('Digite o primeiro numero'))
 let n2 = Number(leia('Digite o segundo numero'))
 let n3 = Number(leia('Digite o terceiro numero'))

 let resultado = calcularMedia(n1,n2,n3)
 console.log(`A média de ${n1} , ${n2} e ${n3} é ${resultado}`)