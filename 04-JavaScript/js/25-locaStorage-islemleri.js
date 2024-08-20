// local storage islemleri

let user ={userName: 'mistik', isActive: true}
console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')// bilgi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

let items = [1,2,3,user]
let items2 = [4,2,3,user]
localStorage.setItem('newItems2',items2) // bilgi sakli geldi bunu istemiyoruz
localStorage.setItem('newItems',JSON.stringify(items))

let newItems = localStorage.getItem('newItems')
newItems = JSON.parse(newItems)
console.log(newItems)
