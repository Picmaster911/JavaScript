const API = "https://api.chucknorris.io/jokes";
const controller = action => fetch(action).then(data => data.json());

const categoryDiv = document.getElementById("category");

controller(`${API}/categories`)
    .then(response => {
        response.forEach(category => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "jokeCategory";
            input.value = category;

            label.innerText = category;
            label.prepend(input);
            categoryDiv.append(label);
        })
    });


const form = document.querySelector(".form");
const cardContainer = document.querySelector(".card-container");

form.addEventListener("submit", e => {
    e.preventDefault();

    const choosenButton = document.querySelector("input[name=jokeType]:checked").value;

    if(choosenButton === "random") {
        controller(`${API}/random`).then(data => renderCardJoke(cardContainer, data));
    }
    if(choosenButton === "category") {
        const choosenCategory = document.querySelector("input[name=jokeCategory]:checked").value;
        controller(`${API}/random?category=${choosenCategory}`).then(data => renderCardJoke(cardContainer, data));
    }
    if(choosenButton === "search") {
        const inputValue = document.getElementById("searchText").value;
        controller(`${API}/search?query=${inputValue}`).then(data => {
            data.result.forEach(joke => renderCardJoke(cardContainer, joke));
        });
    }
})

function renderCardJoke(container, joke) {
    const divCard = document.createElement("div");
    const spanLike = document.createElement("span");

    divCard.classList.add("card");
    spanLike.classList.add("like");

    spanLike.addEventListener("click", () => {
        createFavList(joke);
        spanLike.innerText = !checkIncludingFavList(joke.id) ? "🤍" : "💜";
    });
    
    divCard.innerText = joke.value;
    spanLike.innerText = !checkIncludingFavList(joke.id) ? "🤍" : "💜";


    divCard.append(spanLike);
    container.prepend(divCard);
}

function checkFavInLocalStorage() {
    return localStorage.getItem("favoriteList")
        ? JSON.parse(localStorage.getItem("favoriteList"))
        : [];
}

function checkIncludingFavList(id) {
    return checkFavInLocalStorage().find(joke => joke.id === id);
}

function addJokeToFAvList(joke) {
    const favList = checkFavInLocalStorage();
    favList.push(joke);

    localStorage.setItem("favoriteList", JSON.stringify(favList));
    renderFavJoke();
}

function removeJokeFromFavList(joke) {
    const favList = checkFavInLocalStorage();
    const filterFav = favList.filter(favJoke => favJoke.id !== joke.id);

    localStorage.setItem("favoriteList", JSON.stringify(filterFav));
    renderFavJoke();
}

function createFavList(joke) {
    if(!checkIncludingFavList(joke.id)) {
        addJokeToFAvList(joke);
    } else {
        removeJokeFromFavList(joke);
    }
}

function renderFavJoke() {
    const favContainer = document.querySelector(".fav-container");
    favContainer.innerHTML = "";

    checkFavInLocalStorage().forEach(favJoke => renderCardJoke(favContainer, favJoke));
}

renderFavJoke();
