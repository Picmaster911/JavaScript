const input = document.querySelector(`#input1`);
const submit = document.querySelector(`#submit`);
const regexp = new RegExp(/^([1-9][0-9]?|100)$/);
const form = document.querySelector(`form`);
const API = `https://jsonplaceholder.typicode.com/posts/`
const div = document.createElement(`div`)

const button =  document.createElement(`button`)

function  renderComment (response){
    console.log(response)
    response.forEach(comment => {
        const divComment = document.createElement(`div`)
        const divName = document.createElement(`div`)
        const divEmail = document.createElement(`div`)
        divComment.innerText = comment.body;
        divEmail.innerText = comment.email;
        divName.innerText = comment.name;
        divComment.append(divName)
        divComment.append(divEmail)
        document.body.append(divComment)
    })
}
function renderResponse (response){
    button.innerText = `Get comment Id = ${response.id}`
    div.innerText = response.body;
    div.append(button)
    document.body.append(div)
    button.addEventListener(`click`,()=>{
        controller(`${API}${input.value}/comments`,renderComment)
    })
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
}

form.addEventListener(`submit`,(e)=>{
    e.preventDefault()
    controller(`${API}${input.value}`,renderResponse)
    console.log(`submit`)
})