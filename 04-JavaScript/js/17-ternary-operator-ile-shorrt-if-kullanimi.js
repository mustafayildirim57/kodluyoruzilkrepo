// ternary operator ile shorrt if kullanimi

// kullanici adi varsa yazdir yoksa bilgi bulunamadi
let userName = prompt('kullanici adinizi giriniz')
let info = document.querySelector('#info')

// ternary kullanimi:
// kosul ? dogruysa || : yanlissa 

info.innerHTML = `${userName.length > 0 ? userName : 'kullanici adiniz bulunamadi' }`