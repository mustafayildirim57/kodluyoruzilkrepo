// sring veri turu işelmleri

let email = "mıstık@gmail.com"
let firstName = "mıstık"
let lastName = "YILDIRIM"

//string karakter sayısı -> length 
console.log(email.length)

// Ilk karakter bulmak -> [0] :
console.log(email[0])
console.log(email.charAt(2))

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
firstName = firstName.toLowerCase()
console.log(firstName)


//sting icşnde istediğimiz bilgiyi aramak ve bulmak -> search : 
console.log(email.search("@"))
console.log(email[6])

email.search("olmayan") // -1 döndürüyor

//belli bir yere kadar al -> slice :
const DOMAIN = email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))) // gmail kısmı değişti sadc

//bilgiyi değiştir -> replace :
email = email.replace("gmail.com", "hotmail.com")
console.log(email)

//istediğim bilgi varmı? -> includes :
console.log(email.includes("@")) // true
console.log(email.includes("asdas")) // false

// istediğim bilgi ile basladı mı? / bitti mi? -> startsWidth, endsWith :
console.log(email.endsWith("@")) // false
console.log(email.startsWith("mıstık")) // true
console.log(email.endsWith("hotmail.com")) // true

//ilk harflerini buyuk yap -> 
firstName = "FİRSTNAME"
lastName = "LASTNAME"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)


