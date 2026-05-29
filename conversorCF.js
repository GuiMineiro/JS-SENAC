let temperatura = 25 //recebe a temperatura
let uM = 'fahrenheit' //determina a unidade de medida
if (uM == 'celsius'){ //verifica se a unidade de medida determinada é celsius
    let f = ((temperatura * 9/5) + 32) //converte celsius em fahrenheit
    console.log(f.toFixed(2) +'°F')
}else{
    if (uM == 'fahrenheit'){ //caso a unidade de medida n tenha sido celsius, verifica se é fahrenheit
        let c = ((temperatura-32)*5/9) //converte fahrenheit em celsius
        console.log(c.toFixed(2) +'°C')
    }else{
        console.log('Unidade de medida invalido, tente celsius ou fahrenheit.')
    }
}