// metodlarinin kullanimi ve array icinde array

let items = [1, 2, 3, 4, 5]

// Array icinde array
let femaleUsers = ['Ayse', 'Hulya', 'Merve']
let maleUsers = ['Ahmet', 'Hasan', 'Mehmet']

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

console.log (items.length)
console.log (items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log (items[0][0]) // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak ->splice(pos, item?)
let newItems = items.splice(1, 5)

console.log ("newItems: ", newItems)
console.log ("items: ", items)

// Array icerisindeki ogenin index bilgisini bulmak ->index0f('value')
items.unshift("lorem")
items.push ("ipsum")

console.log (items.indexOf('ipsum'))

// Array Kopyalamak -> slice, . [. . .ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// es6 birden fazla array yapisini birlestirmek
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek ->toString, join
console.log(allUsers.toString())
console.log(allUsers.join (" --- ") )

//Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers. length / 2 ), 0, "Lorem")
console.log(allUsers)
