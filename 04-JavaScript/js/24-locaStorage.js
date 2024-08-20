// localStorage

//localstorage icine bilgi kaydetmek
let email = '24mustafa2001@gmail.com'
localStorage.setItem('userEmail', email) // -> anahtar deger yapisi

//bir degiskene atamak ve cagirmak
let localStorageEmaInfo = localStorage.getItem('userEmail')
console.log(localStorageEmaInfo)

// degeri degistirmek
email = 'sdfsdfsdfds'
localStorage.setItem('userEmail', email) // -> tekrar gondernek gerekli
let localStorageEmaInfo2 = localStorage.getItem('userEmail')
console.log(localStorageEmaInfo2)

// silmek

localStorage.removeItem('userEmail')
