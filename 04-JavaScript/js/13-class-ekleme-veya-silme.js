// liste içerisinde class ekleme veya çıkarma

let greeting = document.querySelector ("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("a-class", "b-class", "c-class") // birden fazla eklme

greeting.classList.remove("text-primary", "title") // virden fazla class silme

console.log(greeting.classList)