const produtos =[
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
//cadastrar novo produto
const novoProduto ={
    id:4,
    nome:"Webcam",
    preco:250,
    estoque:6
}
produtos.push(novoProduto)
console.log(produtos)

//encontrar o indice de um produto
const indice = produtos.findIndex(produtos=>produtos.id===2)
console.log(indice)

//excluir um produto do cadastro
produtos.splice(indice,1)//importante definir quantos objetos serao removidos
console.log(produtos)

//remover uma propriedade de um produto
delete produtos[2].preco
console.log(produtos)

