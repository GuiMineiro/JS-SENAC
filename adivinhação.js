const leia = require('prompt-sync')()
var segredo = Math.floor(Math.random()*100)+1;
var teste = 0
var cont = 0
console.log(`Tente adivinhar um número entre 1-100 vc tem 3 tentativas!!! `)
do{
    cont++
    teste = Number(leia(`${cont}ª tentativa`))
    if (teste>segredo){
        console.log(`Tente mais baixo!!`)
    }
     if (teste<segredo){
        console.log(`Tente mais alto!!`)
    }
    if (teste == segredo){
        console.log(`Vc acrtou o numero era ${segredo}`)
    }
}while(cont < 3)
    if (teste != segredo){
        console.log(`vc falhou o numero era ${segredo}`)
    }