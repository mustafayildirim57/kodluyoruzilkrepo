// veri tuu öğrenme

let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    typeof(price),
    typeof(stringPrice),
    typeof(hasPassword)
)

let number1 = "11"
number1 = parseInt(number1)
console.log( "number1: ", number1, typeof(number1))

let number2 = "12px3"
number2 = parseInt(number2)// baştaki number kısmı alıyor
console.log( "number2: ", number2, typeof(number2))

let number3 = "11"
number3 = Number(number3)//sadece number varsa alıyor, herhangi bir string karakter olursa nan işaretliyor
console.log( "number3: ", number3, typeof(number3))

let number4 = "11.4"
number4 = Number(number4)
console.log( "number4: ", number4, typeof(number4))

//number to string
let number5 = 55
number5 = number5.toString()
console.log( "number5: ", number5, typeof(number5))
