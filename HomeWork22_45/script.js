const input = document.querySelector(`#input1`);
const submit = document.querySelector(`#submit`);
const form = document.querySelector(`form`);
const API = `https://jsonplaceholder.typicode.com/posts`;
const div = document.createElement(`div`);
const button =  document.createElement(`button`);
const mainDivComment = document.createElement(`div`);
const mainConteiner = document.querySelector(`#mainDiv`);
button.classList.add(`button`);
const regexp = new RegExp(/^([1-9][0-9]?|100)$/);

function  renderComment (response){
    mainDivComment.innerText = ``;
    console.log(response);
    response.forEach(comment => {
        const divComment = document.createElement(`div`);
        divComment.classList.add(`flex-container`);
        const divName = document.createElement(`div`);
        const divEmail = document.createElement(`div`);
        divComment.innerText = comment.body;
        divEmail.innerText = comment.email;
        divName.innerText = comment.name;
        divComment.append(divName);
        divComment.append(divEmail);
        mainConteiner.append(divComment);
        button.disabled = 'disabled';
        button.removeEventListener('click', callAPI, false);
    })
}
function callAPI (){
    controller(`${API}/${input.value}/comments`,renderComment)
}
function renderResponse (response){
    button.disabled = false;
    document.querySelectorAll(`.flex-container`).forEach(element => element.remove());
    button.innerText = `Get comment Id = ${response.id}`;
    div.innerText = response.body;
    div.classList.add(`flex-container`);
    div.append(button);
    mainConteiner.append(div);
    button.addEventListener(`click`,callAPI);
}

input.addEventListener(`input`,()=>{
    if( !regexp.test(input.value)){
        input.value = `Only number 1-100 `;
        submit.disabled = 'disabled';
    }
    else {
        submit.disabled = false;
    }
})

function controller (href,func) {
    fetch(href)
        .then(response => response.json())
        .then(json => func(json))
        .catch(error =>console.error(error))
}

form.addEventListener(`submit`,(e)=>{
    e.preventDefault();
    controller(`${API}/${input.value}`,renderResponse)
    console.log(`submit`);
})