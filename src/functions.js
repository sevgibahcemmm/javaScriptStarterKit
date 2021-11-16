
function    addToCart(quantity,productName="Elma")
{
console.log("Sepete Eklendi  Ürün Adı : "+productName+ " Adedi : "+ quantity)
}

addToCart(10)

let sayHello=()=>{
   console.log( "Hellooooo world !")
}
sayHello();
let sayHello2=function(){
    console.log( "Hello Word 2!")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("")

function addToCart3(product) {
    console.log("Ürün :"+product.productName)
    console.log("Fiyatı :"+product.unitPrice)
    console.log("Miktarı :"+product.quantity)
}
let product1={productName:"Elma",unitPrice:10,quantity:5}

addToCart3(product1)
let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Vişne",unitPrice:10,quantity:5},
    {productName:"Muz",unitPrice:10,quantity:5},

]
addToCart4(products)

function add(birsey,...numbers) {
    let total=0;
    for (let index = 0; index < numbers.length; index++) {
        total=total + numbers[index]
    }
     console.log(total);
     console.log(birsey);
    }
   

add(20,30)
add(20,30,50)
add(20,30,50,500)
let numbers=[30,10,55,66]
console.log(Math.max(...numbers))
let [icAnadolu,marmara,doguAnadolu,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Doğu Anadolu",population:"40M"},
    [
    ["Ankara","Konya"],
    ["İstanbul","Çanakkale"],
    ["Erzurum","Kars"]
    ]
]
console.log(doguAnadolu.name)
console.log(doguAnadolu.population)
console.log("İç Anadolu Şehileri :"+icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)