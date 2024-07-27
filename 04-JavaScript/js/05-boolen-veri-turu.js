// boolen kullanımı
let isActive = true
isActive = false
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("2") // true
Boolean("0") // true
Boolean("") // false

userName = "user"
console.log(Boolean(userName))

Boolean(0) // false
Boolean(-0) // false
Boolean(0.1) // true
Boolean(0 == 0) // true