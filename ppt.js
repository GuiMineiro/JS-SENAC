//pedra papel tesoura
const leia = require('prompt-sync')()
const ppt = new Array('pedra','papel','tesoura')
var t = 1
while (t != "0"){
    var controleV = 0//controladores de vitoria e derrota
    var controleD = 0
    var pcControlV = 0
    var pcControlD = 0
    console.log('Melhor de 3')
    for (var i =0; i < 50; i++){//ciclo da melhor de 3
        
        let player = leia ('pedra, papel, ou tesoura? ').trim().toLowerCase()
        let n = Math.floor(Math.random(0)*3)
        let pc = ppt[n]
        if (player != 'pedra'&& player !='papel'&& player !='tesoura'){
            console.log ('Opção invalida!')
        }else if (player == 'pedra'&& pc == 'tesoura'){//verificadores de relaçao de vitoria
            console.log('jogador: '+player+' computador: '+pc+' !!vc ganhou!!')
            controleV = controleV + 1
            pcControlD = pcControlD + 1
        }else if (player == 'pedra'&& pc == 'papel'){
            console.log('jogador: '+player+' computador: '+pc+' !!vc perdeu!!')
            controleD = controleD + 1
            pcControlV = pcControlV + 1
        }else if (player == 'tesoura'&& pc == 'papel'){
            console.log('jogador: '+player+' computador: '+pc+' !!vc ganhou!!')
            controleV = controleV + 1
            pcControlD = pcControlD + 1
        }else if (player == 'tesoura'&& pc == 'pedra'){
            console.log('jogador: '+player+' computador: '+pc+' !!vc perdeu!!')
            controleD = controleD + 1
            pcControlV = pcControlV + 1 
        }else if (player == 'papel'&& pc == 'tesoura'){
            console.log('jogador: '+player+' computador: '+pc+' !!vc perdeu!!')
            controleD = controleD + 1
            pcControlV = pcControlV + 1 
        }else if (player == 'papel'&& pc == 'pedra'){
            console.log('jogador: '+player+' computador: '+pc+' !!vc ganhou!!')
            controleV = controleV + 1
            pcControlD = pcControlD + 1 
        }else{
            console.log('jogador: '+player+' computador: '+pc+' !!empate!!')
        }
        if(controleV == 2){//resultados 
            console.log('Voce venceu a melhor de tres de '+controleV+' a '+pcControlV)
            break;
        }if(controleD == 2){
            console.log('Voce perdeu a melhor de 3 tres '+pcControlV+' a '+controleV)
            break;
        }
    }
    var t = leia ('1-jogar dnv 0-sair')   
}



