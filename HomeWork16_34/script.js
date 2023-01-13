const  div = document.createElement("div");

for (i=1; i <= 8; i++ ){
    const  pic = document.createElement("img");
    const  div_i = document.createElement("div");
    pic.src = `/img/${randomImg()}.png`;
    pic.style.width = "230px"
    div_i.appendChild (pic)
    div_i.style.float = "Left"
    div_i.style.margin = "20px"
    div_i.style.border ="1px solid #ccc"
    div.append(div_i)
}
document.body.append(div);
function randomImg () {
    return Math.floor(Math.random() * 9) + 1
}