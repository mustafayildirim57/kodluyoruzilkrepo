// dom ile içnden oge secimi
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

//let h2 = document.getElementsByTagName("h2")
let title = document.getElementById("title")
title.innerHTML = "değişen bilgi"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " değiti"
console.log(link.innerHTML)
link.style.color = "red"
link.classList.add("btn")

