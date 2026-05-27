let peso = 85
let altura = 1.80
let imc = peso / (altura * altura)
if ((imc <= 25)&&(imc > 29.9 )){ //testand se o imc é esta entre 25 e 29.9
    console.log("Magrelo")//caso sim vai escrever "magrelo"
} else{//caso não
    console.log("Gordin saliente")// vai escrever "Gordin saliente"
}


console.log("Your imc is: "+imc.toFixed(2))