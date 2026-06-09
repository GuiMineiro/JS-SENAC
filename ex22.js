const leia=require('prompt-sync')()
let idade = leia('Qual sua idade? ')
let diaSemana = (leia('Dia da semana: ')).toLowerCase()
if (diaSemana == 'quarta' || idade < 12 || idade >= 60){
    console.log('Meia. 10,00')
}else {
    console.log('Inteira. 20,00')
}