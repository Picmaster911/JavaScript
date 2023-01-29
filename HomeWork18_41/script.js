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

const post_Adress = [
    {
        city: `Днепр`,
        adress:[
            {
                unit:`Type 1`,
                adress: ` Відд 1 Дніпро, вул. Маршала Малиновського, 114`
            },
            {
                unit:`Type 2`,
                adress: `Відд 2 Дніпро, вул. Академіка Янгеля, 40`
            },
            {
                unit:`Type 3`,
                adress: `Відд 3 Дніпро, вул. Тверська, 1`
            },
            {
                unit:`Type 4`,
                adress: `Відд 4 Дніпро, вул. Бориса Кротова, 38 (с. Дороге, провул. Тютіна, 15а)`
            },
        ]
    },
    {
        city: `Киев`,
        adress:[
            {
                unit:`Type 1`,
                adress: `Київ, вул. Пирогівський шлях, 135`
            },
            {
                unit:`Type 2`,
                adress: `Київ, вул. Богатирська, 11`
            },
            {
                unit:`Type 3`,
                adress: `Київ, вул. Калачівська, 13 (Стара Дарниця)`
            },
            {
                unit:`Type 4`,
                adress:`Київ, вул. Верховинна, 69`
            },
        ]
    },
]


const divRight = document.querySelector(`#DivRight`);
const buttonKitchen = document.querySelector(`#button1`);
const buttonDevices = document.querySelector(`#button2`);
const cosmeticDevices = document.querySelector(`#button3`);
const mainDiv = document.querySelector(`.main`);
const divItem = document.querySelector(`.main`);
const buttonB =document.createElement(`button`);
const form =document.querySelector(`form`);
const select_City =document.querySelector(`#select-1`);
const select_Unit =document.querySelector(`#select-2`);



form.addEventListener(`submit`,(e)=>{
    console.log(`submit`)
    e.preventDefault()
    dataForm = new FormData (form)
    for (const [key,value] of dataForm) {
        const h3 = document.createElement(`h3`)
        const div = document.createElement(`div`)
        h3.innerText = `${key}:  ${value}`
        div.style.width =`100%`
        div.append(h3)
        form.style.display = `none`
        mainDiv.append(div)
    }
})

function rendSelectUnit (array,city){
    for (let i = select_Unit.length;  select_Unit.length != 0; i--){
        select_Unit.remove(i);
    }
    array.forEach((item) => {
        if (city === item.city){
            item.adress.forEach ((item) => {
                let option = document.createElement(`option`);
                option.value = item.adress
                option.innerText = item.adress
                select_Unit.appendChild(option);
            })
        }
    })
}

post_Adress.forEach((item) => {
    let option = document.createElement(`option`);
    option.value = item.city;
    option.innerText = item.city
    select_City.appendChild(option);
})
rendSelectUnit(post_Adress,select_City.value)

select_City.addEventListener(`change`,()=>{
    rendSelectUnit(post_Adress,select_City.value);
    console.log(select_City.value)
})


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
    divRight.innerHTML = ``;
    mainDiv.innerHTML = ``;
    mainDiv.append(form);
    form.style.display = `block`
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
form.style.display = `none`