let peso = 85
let altura = 1.80
let imc = peso / (altura * altura)
if ((imc <= 25)&&(imc > 29.9 )){
    console.log("Magrelo")
} else{
    console.log("Gordin saliente")
}


console.log("Your imc is: "+imc.toFixed(2))