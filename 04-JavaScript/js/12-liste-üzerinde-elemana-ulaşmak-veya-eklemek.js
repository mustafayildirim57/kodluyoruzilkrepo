// liste içerisinde son elemana erişme veya eleman ekleme
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerText = "son oge değişti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerText = "ilk oge değişti"

let ulDom = document.querySelector("ul#list")

let liDom = document.createElement("li")

liDom.innerHTML = "kendi oluşturduğuuz oge"

ulDom.append(liDom) // en sona ekleniyor

ulDom.prepend(liDom)