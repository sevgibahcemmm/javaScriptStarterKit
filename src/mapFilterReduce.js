let cart=[
    {id:1,productname:"Telefon",Quantity:3,UnitPrice:4000},
    {id:2,productname:"Bardak",Quantity:2,UnitPrice:30},
    {id:3,productname:"Kalem",Quantity:1,UnitPrice:20},
    {id:4,productname:"Şarj Cihazı",Quantity:4,UnitPrice:100},
    {id:5,productname:"Kitap",Quantity:5,UnitPrice:35},
    {id:6,productname:"Pot",Quantity:8,UnitPrice:150},
    {id:7,productname:"Bilgisayar",Quantity:30,UnitPrice:7500},

]
cart.map(product=>{
console.log(product.productname+" :" + product.Quantity*product.UnitPrice)
})

let total=cart.reduce((acc,product)=>acc+product.UnitPrice,0)
console.log(total)


let quantityOver2=cart.filter(product=>product.Quantity>2)
console.log(quantityOver2)

function addToCart(sepet) {
sepet.push({id:8,productname:"Ruhsat",Quantity:1,UnitPrice:100})  
}

addToCart(cart)
console.log(cart)

let sayi=10
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)
