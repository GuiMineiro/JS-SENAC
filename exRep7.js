const leia=require('prompt-sync')()
var r = 0
for (let index = 1; index <=5; index++) {
    let n = Number (leia('Digite um numero'))
    r = r + n
}
console.log(r)