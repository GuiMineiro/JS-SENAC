//pedra papel tesoura
const leia = require('prompt-sync')()
const ppt = new Array('pedra','papel','tesoura')


while (t != 3){
    let cv = 0
    let cd = 0
    console.log('Melhor de 3')
    for (var i =0; i < 3; i++){
        
        let pl = leia ('pedra, papel, ou tesoura? ')
        let n = (Math.floor(Math.random(0)*2)+1)
        let pc = ppt[n]
        if (pl == 'pedra'&& pc == 'tesoura'){
            console.log('jogador: '+pl+' computador: '+pc+' vc ganhou')
            let cv = cv + 1
        }else if (pl == 'pedra'&& pc == 'papel'){
            console.log('jogador: '+pl+' computador: '+pc+' vc perdeu')
            let cd = cd + 1
        }else if (pl == 'tesoura'&& pc == 'papel'){
            console.log('jogador: '+pl+' computador: '+pc+' vc ganhou')
            let cv = cv + 1
        }else if (pl == 'tesoura'&& pc == 'pedra'){
            console.log('jogador: '+pl+' computador: '+pc+' vc perdeu')
            let cd = cd + 1
        }else {
            console.log('jogador: '+pl+' computador: '+pc+' empate')
        }
        
    }
    
}



console.log(n)