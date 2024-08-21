// array forEach kullanimi

const PRODUCTS =["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach ( (product, index, array) =>array [index] =product + " 111")
PRODUCTS.forEach ( (product, index, array) => array [index] = `${product.toUpperCase()}` ) //toUpperCase
console.log(PRODUCTS)

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach( item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})
