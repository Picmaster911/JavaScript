let myOption = {
    'Square': () => document.createElement('option',`Square`, ),
    'Rectangle': () => document.createElement('option',`Rectangle`),
    'Circle': () => document.createElement('option',`Circle`),
}
const optionArray = {};
const bodyM = document.querySelector(`body`);
bodyM.style.margin = `100px auto`;
bodyM.style.maxWidth = `960px`;
bodyM.style.backgroundColor ="#000";
const div = document.createElement(`div`);
div.className ="form";
my_select = document.createElement('select');
my_select.className = "input";
my_select.id = "mySelect"
const div_shape = document.createElement(`div`);
div_shape.className ='submit';
div.className ="form";
const inputColor = document.createElement(`input`);
inputColor.type = "color"
inputColor.value = "#4575a6"

inputColor.className = "color";
inputColor.min = "0"
inputColor.max = "100"

for (const key in myOption) {
    optionArray[key] = myOption[key] ();
    optionArray[key].text = [key];
    my_select.appendChild(optionArray[key]);
    console.log(optionArray);
}

my_select.addEventListener( 'change', () => {

    // if (my_select.value === 'Square'){
    //     setStyle(div_shape,"0%","200px","200px");
    //     console.log(`select Square `);
    // }

    if (my_select.value === 'Rectangle'){
        setStyle(div_shape,"0%","200px","150px");
        console.log(`select Rectangle`);
    }

    if (my_select.value === 'Circle'){
        setStyle(div_shape,"100%","200px","200px");
        console.log(`select Circle`);
    }

})
inputColor.addEventListener( 'input', () => {
    div_shape.style.backgroundColor = inputColor.value;
})

function setStyle (div,borderRadius,width,height){
    div.style.borderRadius = borderRadius ;
    div.style.width = width ;
    div.style.height = height;
}

div.appendChild (my_select);
div.appendChild (div_shape);
div.appendChild (inputColor);
document.body.prepend(div);

let test = document.querySelector("option");
test.addEventListener('onclick', () => {
    setStyle(div_shape,"0%","200px","150px");
    console.log(`select Rectangle`);
})


