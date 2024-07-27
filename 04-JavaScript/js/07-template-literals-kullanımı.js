// template literals kullanımı

let userName = "mıstık"
const DOMAIN = "gmail.com"

let email = userName + "@" + DOMAIN

//console.log("merhaba ", userName, ", email adresin: ", email)

let info = `Merhaba ${userName}, siteme hosşgeldin.. 
mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 10 } TL
saat: ${new Date().getHours()}
`

console.log(info)