const smile = document.querySelectorAll(`.imgM`);

smile.forEach((item,index) => {
    item.addEventListener(`click`,() => {
const count = document.querySelector (`#count${index+1}`);
        count.innerText = parseInt(count.innerText) + 1;
    })
})
