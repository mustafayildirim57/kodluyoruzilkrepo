// prompt ile kullanicidan bilgi alma

let fullName = prompt("litfen adını gir")

console.log(fullName)

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`

