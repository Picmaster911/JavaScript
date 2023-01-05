
let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];

Array.prototype.heroesRender = function (dir){
    let rendArray = [];
    for (i = 0; i < this.length; i++) {
        for (let key in this[i]){
            if (i === 0){
                rendArray.push(`<tr>
                                <td>Name</td>                              
                                <td>Icon</td>
                               </tr>`)
            }
             rendArray.push(`<tr>
                                <td>${this[i][key]}</td>                              
                                <td><img src = images/${dir}/${this[i][key].toLowerCase().replace(/\s/g, '')}.svg width="30" height="30"></td>
                              </tr>`)
        }
    }
    return rendArray;
}
document.write(`<table>${marvelHeroes.heroesRender(`marvel`).join(``)}</table>`);
document.write(`<table>${dcHeroes.heroesRender(`dc`).join(``)}</table>`);