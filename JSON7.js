const texto = '{"nome":"Maria","idade":18,"cidade":"Belo Horizonte"}';
console.log(typeof(texto))
const cadastro =JSON.parse(texto)
console.log(cadastro.nome)
console.log(cadastro.idade)
console.log(typeof(cadastro))