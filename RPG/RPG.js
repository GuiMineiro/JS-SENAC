//projeto de rpg
//escolha de personagem
const leia = require('prompt-sync')()
let heroiAtual = null
let vidaAtual = null
function criarHeroi(nome,vida = 100,ataque = 10){
    return{
    nomeH:nome,
    vidaH:vida,
    ataqueH:ataque
    }
}
//herois e monstros

const monstro1 = criarHeroi('Quase Nada',40,10)
const monstro2 = criarHeroi('Tripa Seca',30,18)
const monstro3 = criarHeroi('Pouca Trancas',50,6)
const heroi1 = criarHeroi('Chapolin',80,12)
const heroi2 = criarHeroi('SuperSam',100,8)
const heroi3 = criarHeroi('Lagartixa',60,19)

// lutar

function entrarLuta(){
    console.log('=========================================================')
    console.log('o heroi da nossa aventura acaba de encontrar um terrivel \n vilão!!!')
    




}


//escolha de heroi
function escolhaHeroi(){
    console.log('=========================================================')
    console.log('Heroi 1. '+(heroi1.nomeH)+' Vida: '+(heroi1.vidaH)+' Ataque: '+(heroi1.ataqueH))
    console.log('Heroi 2. '+(heroi2.nomeH)+' Vida: '+(heroi2.vidaH)+' Ataque: '+(heroi2.ataqueH))
    console.log('Heroi 3. '+(heroi3.nomeH)+' Vida: '+(heroi3.vidaH)+' Ataque: '+(heroi3.ataqueH))
    let heroi = leia('=========================================================')
    switch (heroi){
        case '1':
            heroiAtual = heroi1
            vidaAtual = (heroiAtual.vidaH)
            console.log(heroiAtual.nomeH);
            console.log(heroiAtual.vidaH);
            console.log(heroiAtual.ataqueH)

            mostrarMenu()
            break;
        case '2':
            heroiAtual = heroi2
            vidaAtual = (heroiAtual.vidaH)
            console.log(heroiAtual.nomeH);
            console.log(heroiAtual.vidaH);
            console.log(heroiAtual.ataqueH)

            mostrarMenu()
            break;
        case '3':
            heroiAtual = heroi3
            vidaAtual = (heroiAtual.vidaH)
            console.log(heroiAtual.nomeH);
            console.log(heroiAtual.vidaH);
            console.log(heroiAtual.ataqueH)

            mostrarMenu()
            break;
        default:{
            console.log('Comando invalido')
            escolhaHeroi()
        }
    }
    
}
//iniciar
function telaIniciar(){
    
    console.log('=========================================================')
    console.log('Mais rápido que uma tartaruga, mais forte que um rato,\n e mais inteligente que um asno, ele é o Chapolin Colorado')
    let iniciarJG = leia('=========================================================')
    if (iniciarJG != false){
        escolhaHeroi()
    }
}
telaIniciar()


//menu 
function mostrarMenu (){
    console.log('=========================================================')
    console.log('========================1.Status=========================')
    console.log('========================2.lutar==========================')
    console.log('========================0.sair===========================')
    let escolha = leia('=========================================================')
    switch (escolha){
        case '1':
            mostrarStatus()
            break
        case '2':
            lutar()
            break
        case '0':
            sair()
            break 
        default:
            console.log('========================comando invalido=================')
            mostrarMenu()

    }

}

//status
function mostrarStatus(Voltar){
    console.log('=========================================================')
    console.log(heroiAtual.nomeH)
    console.log('Vida: '+heroiAtual.vidaH+' / '+vidaAtual)
    console.log('Ataque: '+heroiAtual.ataqueH)
    console.log('0.Voltar para o menu')
    let Voltar = leia('=========================================================')
    if (Voltar != false){
     mostrarMenu    
    }
}









    
// 1.escolher personagem
//chapolin, superSam, capitao
//personagem hp / ataque / iniciativa / barr xp até lvl 5
// 2. ver status
// hp / ataque / items /curar
// 3. lutar
//sorteia um inimigo
//sorteia iniciativa
//0. sair


//combate
//1.atacar 2.defender 3.fugir

//monstros hp / ataque 
//tripaSeca,quaseNada,poucasTrancas,matadouro,pançaLouca,pirataAlmaNegra


//ao atingir lvl5  enfrentar o infame capitão alma negra
