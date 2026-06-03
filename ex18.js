const leia = require('prompt-sync')()
let hora = leia ('que horas são?')
if (hora <= 12){
    console.log('Bom dia');
}else if (hora<=17){
    console.log('Boa tarde')
}else if (hora<=23){
    console.log('Boa noite')
}else {
    console.log('fora do relogio')
}