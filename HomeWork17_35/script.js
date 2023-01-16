const bodyM = document.querySelector(`body`);
bodyM.style.margin = `100px auto`;
bodyM.style.maxWidth = `960px`;
bodyM.style.backgroundColor ="#000";
const div = document.createElement(`div`);
div.className ="form";
my_input = document.createElement('input');
my_input.className = "input";
const button1 = document.createElement('button');
const button2 = document.createElement('button');
button1.className ='submit';
button2.className ='submit';
button1.textContent =`Check http`;
button2.textContent =`Check https`;
div.appendChild (my_input);
div.append (button1);
div.append (button2);
document.body.prepend(div);

button1.addEventListener ("click", () => {
  validator(`http`);

})
button2.addEventListener ("click", () => {
    validator(`https`);
})

function validator (protocol) {
    if (my_input.value) {
        const arrayInput = [...my_input.value];
        let forCheck = arrayInput
            .slice(0, 5)
            .join(``)
        forCheck === `protocol` ? location.href = my_input.value : location.href = `${protocol}://${my_input.value}`;
        console.log(`${protocol}://${my_input.value}`);
    }
}

