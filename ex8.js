
let user = 'admin'
let password = '1234'
if (user == 'admin' && password == '1234'){
    console.log('Welcome!!')
}else{
    if (user == 'admin' && password != '1234'){
        console.log('Senha errada tente novamente.')
    } else {
        console.log('Usuario não encontrado')
    }
}