// dom etkinlikleri ile calismak

let greeting = document.querySelector('#greeting')
greeting.addEventListener('mouseover', domClick )

function domClick(){
    console.log('tiklandi')
    this.style.color == 'red' ? this.style.color = 'black' : this.style.color = 'red'
}