// Kosullarla .Calismak Bolum Sonu Egzersizi:

/*
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2-kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3-ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4-ffclass bilgisi text-danger, digerlerinin ise text-primary olsun
*/
const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`

const SAD =`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`
let examGrade = prompt('Sinav notunuzu giriniz')
let textInfo;
let info = document.querySelector('#info')

if (examGrade <= 100 && examGrade >= 0) {
    textInfo = SMILE
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo += ' AA'    
    } else if (examGrade >= 85) {
        textInfo += ' BA'
    } else if (examGrade >= 80) {
        textInfo += ' BB'
    } else if (examGrade >= 75) {
        textInfo += ' CB'
    } else if (examGrade >= 70) {
        textInfo += ' CC'
    } else if (examGrade >= 65) {
        textInfo += ' DC'
    } else if (examGrade >= 60) {
        textInfo += ' DD'
    } else if (examGrade >= 50) {
        textInfo += ' FD'
    } else{
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
        textInfo = `${SAD} FF`
    } 
} else {
    textInfo = 'Bilgler dogru degil'
}


info.innerHTML = `${textInfo} -> ${examGrade}`

