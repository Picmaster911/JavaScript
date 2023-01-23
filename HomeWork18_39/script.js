const buttonR = document.querySelector(`#right`);
const buttonL = document.querySelector(`#left`);
const img = document.querySelector(`#myImg`);
img.src = `/img/3.png`;

const f = render (3);

buttonR.addEventListener(`click`,() =>{
     f(`+`);
})

buttonL.addEventListener(`click`,() =>{
    f(`-`);
})

function render (index) {
    return function (sing){
        if (sing === `+`){
            buttonL.style.display =`inline-block`;
            index < 5 ? index += 1 : buttonR.style.display =`none`;
        }
        if (sing === `-`){
            buttonR.style.display =`inline-block`;
            index > 1 ? index -= 1 : buttonL.style.display =`none`;
        }
        img.src = `/img/${index}.png`;
    };
}