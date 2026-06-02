//projeto de rpg
const leia = require('prompt-sync')()
function criarHeroi(nome,vida = 100,ataque = 10){
    return{
    nomeH:nome,
    vidaH:vida,
    ataqueH:ataque
    }
}
const heroi1 = criarHeroi('Chapolin',80,12)
const heroi2 = criarHeroi('SuperSam',100,8)
const heroi3 = criarHeroi('Lagartixa',60,19)
//menu 
let menuRep = 1
while (menuRep != '0'){
    console.log('========Chapolin colorado ========')
    console.log('==================================')
    console.log('1.Escolher heroi')
    console.log('2.Status')
    console.log('3.lutar')
    console.log('0.sair')
    let menu = leia('==================================')
    switch (menu){
        case '1':
            console.log('Heroi 1. '+(heroi1.nomeH)+' Vida: '+(heroi1.vidaH)+' Ataque: '+(heroi1.ataqueH))
            console.log('Heroi 2. '+(heroi2.nomeH)+' Vida: '+(heroi2.vidaH)+' Ataque: '+(heroi2.ataqueH))
            console.log('Heroi 3. '+(heroi3.nomeH)+' Vida: '+(heroi3.vidaH)+' Ataque: '+(heroi3.ataqueH))
            let heroi = leia('==================================')
            switch(heroi){
                case '1':
                    heroi = heroi1
                    console.log(heroi.nomeH);
                    console.log(heroi.vidaH);
                    console.log(heroi.ataqueH)
                    break;
                case '2':
                    heroi = heroi2
                    console.log(heroi.nomeH);
                    console.log(heroi.vidaH);
                    console.log(heroi.ataqueH)
                    break;
                case '3':
                    heroi = heroi3
                    console.log(heroi.nomeH);
                    console.log(heroi.vidaH);
                    console.log(heroi.ataqueH)
                    break;
        break;    }
        case '2':

        case '3':

        case '0':
            console.log('Sair')
            menuRep = 0
            break
        default:
            console.log('opcão invalida')
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
}