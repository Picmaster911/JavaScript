let dir = false ;
const textFild = document.createElement("p")
textFild.innerText = `Text MOVE`;
textFild.style.backgroundColor = `#ADD8E6`;
textFild.style.textAlign = `center`;
textFild.style.fontSize = `40px`;
document.body.append(textFild);
textFild.onmouseover =  () => {
    const divElement = document.createElement("div")
    divElement.classList.add(`Obj`)
    divElement.style.position =`relative`
    divElement.style.width = `300px`
    divElement.style.height = `100px`
    divElement.style.top = `300px`
    divElement.style.left = `700px`
    divElement.style.transform = `0px`
    const imgElement = document.createElement("img")
    imgElement.src = "/cat.png"
    imgElement.style.width= `200px`
    divElement.append(imgElement);
    document.body.append(divElement);
}
textFild.onmouseleave = () => {
    document.querySelector(".Obj").remove();
}

function  move (element) {

    if (parseInt(element.style.left) < 900 && !dir ){
        element.style.left = `${parseInt(element.style.left) + 1}px`
       if  (parseInt(element.style.left) >= 900){
           dir = true
       }
    }
    if (parseInt(element.style.left) >= 700 && dir ){
        element.style.left = `${parseInt(element.style.left) - 1}px`
        if  (parseInt(element.style.left) <= 700){
            dir = false
        }
    }
}

setInterval(() => {
    const divAll = document.querySelector(".Obj")
        if (divAll) {
            move (divAll)
        }
}
, 10);