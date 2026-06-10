const leia = require(`prompt-sync`)()
var nota = []
for (let i = 0; i <= 5; i++){
    let n = Number(leia(`Digite sua nota`))
    nota.push(n)
}
