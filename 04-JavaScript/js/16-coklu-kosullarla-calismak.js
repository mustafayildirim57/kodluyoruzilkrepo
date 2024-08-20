// coklu kosullarla calismak

let userName = prompt('kullanici adinizi giriniz')
let age = prompt('yasinizi giriniz')

let info = document.querySelector('#info')

if (userName && age >= 18) {
    info.innerHTML ='ehliyet allabilirsiniz'
} else if( !userName ) {
    info.innerHTML ='kullanici bilginiz yok'
} else if( !(age>18) ) {
    info.innerHTML ='yas bilginiz yok beya yasiniz kucuk'
}