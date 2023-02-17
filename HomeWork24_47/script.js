const API = `https://63ee4ddbd466e0c18bad865b.mockapi.io/api/base`
const  button = document.querySelector(`#submit`);
const form =   document.querySelector(`#heroesForm`);
const divCont = document.querySelector(`#mainDiv`);
const inputName = document.querySelector(`#input1`);
const  boolFav = document.querySelector(`#fav`);
const select = document.querySelector(`select`)
const table =  document.querySelector(`#heroesTable`)

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
        let dataResponse = await response.json();
        return dataResponse;
    }
    catch (error){console.log(error)}
}
console.log(form);

form.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    const newItem = {
        name_surname: inputName.value,
        comics: select.value,
    }
    newItem.favourite = boolFav.checked
    const data =  await controller (`${API}/heroes`);
    const heroes =  data.find (item => item.name_surname === newItem.name_surname)
    if (!heroes) {
        const newHero =  await controller (`${API}/heroes`,`POST`,newItem);
       renderHero(newHero);
    }

})

function  renderHero (newHero){
    console.log(newHero)
    const divHero =  document.createElement(`div`);
    const h3Name =  document.createElement(`h3`);
    const h3Comics = document.createElement(`h3`);
    const imgdiv =   document.createElement(`div`);
    const  img = document.createElement(`img`);
    img.src = `/img/close.png`
    img.classList.add(`img`)
    const checkFav =   document.createElement(`input`);
    checkFav.type = `checkbox`
    const  tr = document.createElement(`tr`)

    for (const key in newHero) {
        const  td = document.createElement(`td`)
        if (key === `name_surname`|| key === `comics` ){
            td.innerText = `${newHero[key]}`
        }
        else if  (key === `favourite`){
            newHero.favourite === true ? checkFav.checked = true : checkFav.checked = false
            td.innerText = `Favourite: `
            td.appendChild(checkFav)
        }
          tr.append(td)
    }
    const  trButton = document.createElement(`tr`)
    trButton.append(img)
    tr.append(trButton)
    table.append(tr)


    // img.src = `/img/close.png`
    // img.classList.add(`img`)
    // imgdiv.classList.add(`img_div`)
    // imgdiv.append(img)
    // checkFav.type = `checkbox`
    // newHero.favourite === true ? checkFav.checked = true : checkFav.checked = false
    // divHero.classList.add(`hero`)
    // h3Name.innerText = `Имя героя - ${newHero.name_surname}:`
    // h3Comics.innerText = `Комикс - ${newHero.comics}:`
    // divHero.append(h3Name)
    // divHero.append(h3Comics)
    // divHero.append(checkFav)
    // divHero.append(imgdiv)
    // document.body.append(divHero)

    img.addEventListener(`click`,async ()=>{
        tr.remove()
        await controller (`${API}/heroes/${newHero.id}`,`DELETE`);
        console.log(`Вы удалили героя из базы `)
    })
}



