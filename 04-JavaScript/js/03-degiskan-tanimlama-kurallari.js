// değişken nasıl tanımlanır onu göreceğiz

//camelcase metdou:

let fullname = "" // bu değil
let full_name = "" // buda değil
let fulName = ""  // doğru

let firstName = "mıstık", lastName = "yıldırım" // yanslış
let firstName1 = "mıstıkk"
let lastName1 = "yıldırm"

console.log(firstName1, lastName1)

//uppercase kullanımı

const password = "123" // doğru değil
const PASSWORD = "123" // doğru

// türkçe karakter kullanımı

let türkçeBilgi = " Tükkçe yazdırılıyor.." // bu yanlış
let turkceBilgi = " Türkçe yazdırılıyor.." // bu yanış
let info = " türkçe yazdılıyor" // doğru

console.log(info)

// anlamiz değişkenler

// x, y, z, k, i, e, gibi anlamsız ifadeler yasak

let x = 1 //anlamsız

// ek bilgi
// boolen kullanımı

let isActive = true
let hasPassword = false

//karektar uzunluğu 80 altında olmalı
 let sentence = "asd dasdas daasddfsdjh dkfsdkjf dsjf sdkjfsdkfjdsj dkfsfgsfsd " // yanlış

