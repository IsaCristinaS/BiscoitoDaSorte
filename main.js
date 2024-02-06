
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector('#screen2')
const fortuneCookie = document.querySelector('#fortune-cookie')
const btnReset = document.querySelector('#btnReset')



fortuneCookie.addEventListener('click', toogleScreen)
btnReset.addEventListener('click', toogleScreen)

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

