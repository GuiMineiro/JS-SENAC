const leia = require('prompt-sync')()
function mostrarTabuada(tabuada){
   for (i=1; i<=10; i++){
      let resultado = i * tabuada
      console.log(`${i} * ${tabuada} = ${resultado}`)
   }
}
let tabuada = Number(leia(`Qual tabuada deve ser mostrada?`))
mostrarTabuada(tabuada)