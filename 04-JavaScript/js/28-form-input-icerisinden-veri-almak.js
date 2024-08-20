// Form submit

let formDOM = document.querySelector('#userform')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik
    console.log('islem gerceklesti')
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('scoer',scoreInputDOM.value)
}