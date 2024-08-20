// karşılaştırma ve mantıksal operatorlar

let price = '100'
let user = 'mistik'
// == esitse
console.log('==: ', price == 1)
console.log('==: ', price == 100)

// === hem degeri hem turu esitse
console.log('===: ', price === 1)
console.log('===: ', price === 100)

// != esit degilse
console.log(user != 'guest')

// < kucukse
console.log('price < 100', price < 100)

// <= kucuk esitse
console.log('price <= 100', price <= 100)

// > buyukse
console.log('price > 100', price > 100)

// >= buyuk esitse
console.log('price >= 100', price >= 100)

// && ve
console.log(price < 100 && user != 'guest')

// || veya
console.log(price < 100 || user != 'guest')

// ! degili (tersi)

console.log(!price < 100 && user != 'guest')
