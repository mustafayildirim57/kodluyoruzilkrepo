//*******number *********
//veri tanımlama
let price = 100
let tax = 0.8
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat: ", price,
    "Kdv orani: ", tax,
    "kadv tutarı: ", priceTax,
    "Ürün Fiyatı: ", total
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log(Number("1265"))

//arttırma azaltma işlemi

let counter = 320
counter = counter + 1 // uzun yöntem
counter += 1; // orta yöntem
counter ++; //kısa yöntem

console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 10;
console.log(counter)

//işlem önceliği
console.log( 2 + 3 * 10)
console.log( (2 + 3) * 10)

//mod alma "%"
console.log(15%2)

//üs alma
console.log(2*2*2*2)
console.log( 2 ** 4)

//asağı yuvarlama -> Math.floor
console.log( Math.floor(1.9))

//yukarı yuvarlama -> Math.ceil
console.log( Math.ceil(1.2))

//yakına yuvarlama -> Math.round
console.log( Math.round(2.4))




