const buttonR = document.querySelector(`#right`)
const buttonL = document.querySelector(`#left`)
const img = document.querySelector(`#myImg`)
img.src = `/img/3.png`
let counter = 0;
buttonR.addEventListener(`click`,()=>{
    buttonL.style.display =`inline-block`

if (counter < 3 ){
    counter++
    console.log(counter)
}
else  buttonR.style.display =`none`

})

buttonL.addEventListener(`click`,()=>{

    buttonR.style.display =`inline-block`
    if (counter >= 1 ){
        counter--
        console.log(counter)
    }
    else {
        buttonL.style.display =`none`
    }

})