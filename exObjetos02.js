const leia = require('prompt-sync') ()
const estoque =[
    {
        id:1,
        nome:"Mouse",
        preco:80,
        estoque:10
    },
    {
        id:2,
        nome:"Teclado",
        preco:150,
        estoque:5
    },
    {
        id:3,
        nome:"Monitor",
        preco:1200,
        estoque:2
    }
]
// cadastrar um novo produto
function cadastrarProduto(estoque){
    let produtoNovo ={
        id:(estoque.length+1),
        nome:leia('Nome do produto: '),
        preco:Number(leia('Preço do produto: ')),
        estoque:Number(leia('Itens em estoque: '))
    }
    estoque.push(produtoNovo)
    console.log('Produto cadastrado com sucesso')
}
// encontrar o indice de um produto
function encontrarIndice (estoque,id){
    const indice = estoque.findIndex(produto=>produto.id===Number(leia('Digite o id: ')))
    console.log(`Indice encontrado para o ID: ${id}:`,indice)
    return indice
}
//excluir produto
function excluirProduto(estoque,id){
    const indice = encontrarIndice(estoque,id)
    if (indice != -1){
        estoque.splice(indice,1)
        console.log(`Produto com ID: ${id} removido`)
    }else {
        console.log(`Produto não encontrado`)
    }
}
//remover proprieda de um produto
function removerPropriedade(estoque,id){
    var indice = encontrarIndice
}











excluirProduto(estoque)
console.log(estoque)