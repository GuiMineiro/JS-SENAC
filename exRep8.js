const leia = require('prompt-sync')()
let tabuada = leia(`Qual tabuada devo mostrar: `)
for (let i = 1; i <= 10; i++){
    let r = tabuada * i
    console.log(`${tabuada} * ${i} = ${r}`)
}