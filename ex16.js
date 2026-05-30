const leia = require('prompt-sync')()
let n = leia ('Digite um numero: ')
if (n > 0) {
    console.log('Número Posotivo')
}
if (n < 0) {
    console.log('Número Negativo')
}
if (n == 0) {
    console.log('Zero')
}
