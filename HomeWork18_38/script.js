let kitchenProducts = [
    {
        type: 'grater',
        price: 100
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];
let devicesProducts = [
    {
        type: 'desktop',
        price: 1000
    },
    {
        type: 'laptop',
        price:444
    },
    {
        type: 'smartphone',
        price: 1346
    },
    {
        type: 'tablet',
        price: 1400
    }
];
let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

const divRight = document.querySelector(`#DivRight`);
const buttonKitchen = document.querySelector(`#button1`);
const buttonDevices = document.querySelector(`#button2`);
const cosmeticDevices = document.querySelector(`#button3`);
const mainDiv = document.querySelector(`.main`);
const divItem = document.querySelector(`.main`);
const buttonB =document.createElement(`button`);

buttonKitchen.addEventListener(`click`,() => {
    renderElement(kitchenProducts,`kitchen`);
})
buttonDevices.addEventListener(`click`,() => {
    renderElement(devicesProducts,`devices`);
})
cosmeticDevices.addEventListener(`click`,() => {
    renderElement(cosmeticsProducts,`cosmetics`);
})

divItem.addEventListener(`click`,(e)=>{
    divRight.innerHTML = ``;
    if (e.target.toString() === `[object HTMLImageElement]`){
        const selectElement = document.querySelector(`#${e.target.className}`).cloneNode(true);
        selectElement.style.width = `100px`;
        buttonB.innerText = `Купить`;
        buttonB.id = `buttonB`;
        buttonB.classList.add(`c-button`);
        divRight.append(selectElement);
        divRight.append(buttonB);
    }
})
buttonB.addEventListener(`click`,() =>{
    alert(` Товар куплен. Спасибо за покупку ! `);
    divRight.innerHTML = ``;
    mainDiv.innerHTML = ``;
})
function renderElement (group,category) {
    mainDiv.innerHTML = ``;
    group.map( (item) => {
        const divItem = document.createElement(`div`);
        divItem.classList.add(`product-item`);
        const img = document.createElement(`img`);
        img.classList.add(`${item.type}`);
        img.src = `images/${category}/${item.type}.svg`;
        const divProduct = document.createElement(`div`);
        const h3 = document.createElement(`h3`);
        h3.innerText = `${item.type}`;
        const spanPrice = document.createElement(`span`);
        spanPrice.classList.add(`price`);
        spanPrice.innerText = `${item.price}`;
        const buttonAdd = document.createElement(`a`);
        buttonAdd.classList.add(`button`);
        buttonAdd.innerText =``;
        divProduct.append(h3);
        divProduct.append(spanPrice);
        divProduct.append(buttonAdd);
        divItem.append(img);
        divItem.append(divProduct);
        divItem.id = `${item.type}`;
        mainDiv.append(divItem);
    })
}