let size =[`width="25" height="25"`,`width="50" height="50"`];
let pathPictureSuit = [`<img src= images/hearts.svg ${size[0]} > `,`<img src= images/clubs.svg ${size[0]}> `,
    `<img src= images/diamonds.svg ${size[0]} > `,`<img src= images/spades.svg ${size[0]} > `];
let pathPictureFace = [``,`<img src= images/jack.svg ${size[1]}> `,`<img src= images/queen.svg ${size[1]}>`,
    `<img src= images/king.svg ${size[1]}>`, `<img src= images/hearts.svg ${size[1]} > `,`<img src= images/clubs.svg ${size[1]}> `,
    `<img src= images/diamonds.svg ${size[1]} > `,`<img src= images/spades.svg ${size[1]} > `];
let carta = [];
let sine = [`J`,`Q`,`K`,`T`];
let numberCard ;
let k=0;
carta.push(`<div style="display: flex; flex-wrap: wrap; justify-content: space-around; background-color: #55aa55 ">`)

for ( tNumberCard = 2; tNumberCard  <= 14; tNumberCard ++){
    (tNumberCard > 10) ? numberCard = sine[k] : numberCard = tNumberCard;
    (tNumberCard  > 10 && tNumberCard  <15) ? k++ : k=0;
    for (i = 0; i < 4; i++) {
            carta.push(`
         <div class="carta">
                <div class="suit_top">
                    <div class="number" >${numberCard}</div>
                    <div class="suit">${pathPictureSuit[i]}</div>
                </div>
                <div class="face">${pathPictureFace[k]}  </div>
                <div class="suit_bottom">
                    <div class="number">${numberCard}</div>
                <div class="suit">${pathPictureSuit[i]}</div>
                </div>
            </div>`)
        if (tNumberCard  == 14) k++;
    }
}
carta.push(`</div>`);
carta= carta.join(``);
document.write(carta);