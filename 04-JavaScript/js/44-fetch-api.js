// Fetch Api ile calismak

// json dosyadan veri cekmek
fetch("data/settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector('#userList')

// api uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(element => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = element.title 
        userListDOM.append(liDOM)
    })
})
