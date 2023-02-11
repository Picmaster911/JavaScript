const API = `https://api.github.com/users`
const  button = document.querySelector(`#submit`);
const form =   document.querySelector(`form`);
const divCont = document.querySelector(`#mainDiv`);
const input = document.querySelector(`#input1`);
button.disabled = true;

input.addEventListener(`input`,()=>{
    button.disabled = false;
})
async function controller (API){
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    }
    catch (error){console.log(error)}
}

form.addEventListener(`submit`,async (e) => {
    e.preventDefault();
    const data =  await controller (`${API}/${input.value}`);
    renderUserGit (data);
})

function renderUserGit (data) {
    const div = document.createElement('div');
    const pPublicRepos = document.createElement('p');
    const pfollowers = document.createElement('p');
    const following = document.createElement('p');
    pPublicRepos.innerText = `Публичные репозитории: ${data.public_repos}`;
    pfollowers.innerText = `Подписки: ${data.followers}`;
    following.innerText = `Подписчики: ${data.following}`;
    div.style.width =`400 px`;
    const img = document.createElement(`img`);
    img.src = data.avatar_url;
    div.append(img);
    divCont.append(div);
    divCont.append(pPublicRepos);
    divCont.append(pfollowers);
    divCont.append(following);
}

