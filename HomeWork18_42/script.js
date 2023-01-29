const buttonSave = document.querySelector(".c-button");
const mainDiv = document.querySelector (".main-container");
const table = document.createElement("table");
const tr = document.createElement("tr");

// const allElements = document.querySelectorAll('input, textarea, select');
// buttonSave.addEventListener("click", e => {
//     e.preventDefault();
//     mainDiv.classList.add("d-none");
//     allElements.forEach((item)=>{
//         const td = document.createElement("td");
//         if(item.checked){
//             td.innerText = item.value;
//             tr.append(td);
//         }
//            if(item.checked !== false || item.defaultValue ===""){
//             td.innerText = item.value;
//             tr.append(td);
//         }
//     });
// });
// table.append(tr);
// document.body.append(table);

const form =  document.querySelector(`form`)

buttonSave.addEventListener("click", e => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
});

function serialaze (formNode) {
return new FormData (formNode)
}