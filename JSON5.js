const alunos = [
    {
        nome : "João",
        idade : 15
    },
    {
        nome : "Pedro",
        idade : 18
    },
    {
        nome : "Maria",
        idade : 17
    },
    {
        nome : "Lucas",
        idade : 19
    }
] 
var contador = 0
var maiores = []
for(const aluno of alunos ){
    if (aluno.idade >= 18){
        contador = contador + 1
        maiores.push(aluno.nome)}
}
console.log(`Quantidade: ${contador} \n
    Sendo os alunos ${maiores}`)