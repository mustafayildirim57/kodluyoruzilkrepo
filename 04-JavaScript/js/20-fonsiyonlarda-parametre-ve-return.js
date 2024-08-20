// fonsiyonlarda parametre ve return

// TemelKurallar:
//1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
//3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "Lorem"

function greetings (firstName="", lastname='') { // default parametre aliyor
  // console log (`Merhaba ${firstName ? firstName : ""`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastname}`)
} 

console.log(firstName) // degisken
greetings() // fonksiyona parametre gondermedik ?
greetings('parametre')

function greetings2 (firstName="", lastname='') { 
    let info = (`Merhaba ${firstName} ${lastname}`)
    return info;
} 

let greetingsInfo = greetings2('ad', 'soyad')
console.log(greetingsInfo)

function domIdWriteInfo (id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
    
}

let htmlInfo = '<span style = "color: red"> color reeed </span>'

domIdWriteInfo('info', htmlInfo)

