const leia = require('prompt-sync')()
function menu(nome){
    console.log('ola')
    console.log('========Chapolin colorado ========')
    console.log('==================================')
    console.log('1.Escolher heroi')
    console.log('2.Status')
    console.log('3.lutar')
    console.log('0.sair')
    console.log('==================================')
    console.log(nome)
}
let nome = leia ('Digite um nome ')
let t = leia ('teste  1.sim 0.nao')
if (t == '1'){
    menu(nome);
}