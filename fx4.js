const leia = require('prompt-sync')()
let qntProduto = 0
let c = 1

while ( c == 1){
    preProduto = Number(leia('passe o preço do produto'))
    var preTotal = (preProduto + preTotal)
    qntProduto = (qntProduto+qntProduto)
    c = Number(leia('mais algum produto?\n 1.sim  0.não'))

}

console.log(qntProduto+' produtos, e o total é: '+preTotal)