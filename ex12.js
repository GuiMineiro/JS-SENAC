let cart = 120.00
let discount = Math.floor(cart/100)*10
if (cart > 100.00){
    console.log('You´ve earned a '+discount+'% discount on this purchase, the total is :'+(cart-(cart * discount/100)))
}else{
    console.log('The total is: '+cart)
}