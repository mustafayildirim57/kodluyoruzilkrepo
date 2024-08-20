// bolum sonu egzersiz

// 1: form sec
// 2: inputlari ul icerisine al
// 3: form icindeki bilgiler doru ise sifirla
// 4: bilgi girilmezse kullaniciyi uyar


let userformDOM = document.querySelector('#userform')
userformDOM.addEventListener('submit', formHandler)

const  alertDOM = document.querySelector('#alert')


const alertFunction = (title, message, className = 'warning') => `
    <div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    
    if (USER_NAME.value && SCORE.value ){
        addItem(USER_NAME.value, SCORE.value) // gonderdiktren sonra sifirladik
        USER_NAME.value = ''
        SCORE.value = ''
    } else{
        alertDOM.innerHTML = alertFunction(
            'Baslik Bilgisi',
            'Eksik Bilgi girdiniz'
        )
    }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = 
        `${userName} 
        <span class="badge text-bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}