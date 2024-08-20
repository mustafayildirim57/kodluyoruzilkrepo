// kosullarla calismak

//  kullanici bilgisi varsa ekrana ismini yazdir

let userName = prompt('kullanici adini giriniz:')

// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log('bilgi yok')}
// if (username.length > 0) {console.log(username)} else {console.log('bilgi yok')}
 
if (userName.length > 0) { // dogruysa calisir
    console.log(`kullanici adiniz ${userName}`)
} else { 
    console.log('bilgi yok')
}
