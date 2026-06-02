const leia = require('prompt-sync')()
function criarHeroi(nome,vida = 100,ataque = 10){
    return{
    nomeH:nome,
    vidaH:vida,
    ataqueH:ataque
    }
}
const heroi = criarHeroi('Chapolin',80,12)
console.log(heroi.nomeH);
console.log(heroi.vidaH);
console.log(heroi.ataqueH)