const leia = require('prompt-sync')()
let nota = leia ('Digite a altura: ')

if (nota >= 9){
    console.log('A');
}else if (nota>= 7){
    console.log('B')
}else if (nota>=6){
    console.log('C')
}else {
    console.log('D')
}