const API = `https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base`
const form =   document.querySelector(`#heroesForm`);
const inputName = document.querySelector(`#input1`);
const  boolFav = document.querySelector(`#fav`);
const select = document.querySelector(`select`);
const table =  document.querySelector(`#heroesTable`);

async function controller (API,method = "GET",data){
    let  params = {
        method : method,
        headers: {'Content-Type': 'application/json;charset=utf-8'},
    }
    try {
        if (data){
            params.body =  JSON.stringify(data);
        }
        const response = await fetch(API,params);
        return  await response.json();
    }
    catch (error){console.log(error)}
}

async function getData () {
    const newHero =  await controller (`${API}/heroes`,`GET`);
    console.log(newHero);
    newHero.map( hero => renderHero (hero));
}
getData();

form.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    const newItem = {
        name_surname: inputName.value,
        comics: select.value,
    }
    newItem.favourite = boolFav.checked;
    const data =  await controller (`${API}/heroes`);
    const sameHero =  data.find (item => item.name_surname === newItem.name_surname);
    if (!sameHero) {
        const newHero =  await controller (`${API}/heroes`,`POST`,newItem);
       renderHero(newHero);
    }
})

function  renderHero (newHero){
    let lastElement = 0 ;
    console.log(newHero);
    const  img = document.createElement(`img`);
    img.src = `./img/close.png`;
    img.classList.add(`img`);
    const checkFav =   document.createElement(`input`);
    checkFav.type = `checkbox`;
    const  tr = document.createElement(`tr`);
    const  trButton = document.createElement(`td`);
    trButton.append(img);
    for (const key in newHero) {
        lastElement += 1;
        const  td = document.createElement(`td`)
        if (key === `name_surname`|| key === `comics`){
            td.innerText = `${newHero[key]}`;
        }
        else if  (key === `favourite`){
            newHero.favourite === true ? checkFav.checked = true : checkFav.checked = false;
            td.innerText = `Favourite: `;
            td.append(checkFav);
        }
        else if (lastElement === 4){
            td.append(img);
        }
          tr.append(td)
    }
     table.append(tr);

    img.addEventListener(`click`,async ()=>{
        tr.remove();
        await controller (`${API}/heroes/${newHero.id}`,`DELETE`);
        console.log(`Вы удалили героя из базы ${newHero.name_surname}`);
    })

    checkFav.addEventListener(`change`,async ()=>{
        checkFav.checked === true ? newHero.favourite = true: newHero.favourite = false
       const newHeroes =  await controller (`${API}/heroes/${newHero.id}`,`PUT`,newHero);
        console.log(`Change element in base ${newHero.name_surname} , ${newHero.favourite}`)
    })
}




