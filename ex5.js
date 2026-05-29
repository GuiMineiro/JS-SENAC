let peso = 85
let altura = 1.80
let imc = peso / (altura * altura)
if (imc < 18.5){ 
console.log("Seu IMC é de "+imc.toFixed(2)+', você esta abaixo do peso')  
}
if ((imc >=18.5 )&&(imc <= 24.9)){ 
console.log("Seu IMC é de "+imc.toFixed(2)+', vc esta com peso normal')  
}
if ((imc >= 25)&&(imc <= 29.9)){ 
console.log("Seu IMC é de "+imc.toFixed(2)+', vc esta com sobrepeso')  
}
if ((imc >= 30)&&(imc <= 34.9)){ 
console.log("Seu IMC é de "+imc.toFixed(2)+', vc esta com obesidade grau 1')  
}
if ((imc >= 35)&&(imc <= 39.9)){ 
console.log("Seu IMC é de "+imc.toFixed(2)+', vc esta com obesidade grau 2 ')  
}
if (imc > 40){ 
    console.log("Seu IMC é de "+imc.toFixed(2)+', vc esta com obesidade grau 3, obesidade morbida ')  
}   




