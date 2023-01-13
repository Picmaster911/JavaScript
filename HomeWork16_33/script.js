let numerator = 1;
const tableFild = document.createElement("table")
tableFild.classList.add("tab")
tableFild.style.border = "1px solid black"

for (let i = 1; i <= 10; i++) {
    let tr = document.createElement(`tr`);
    tr.style.border = "1px solid black";
    for (let i = 1; i <= 10; i++){
        let td = document.createElement(`td`);
        td.style.border = "1px solid black";
        td.style.width = "200px";
        td.style.height = "70px";
        td.style.textAlign = "center";
        td.style.fontSize = "30px";
        i % 2 ? td.style.backgroundColor ="#99fff0": td.style.backgroundColor ="#fafad4";
        td.innerText = `${numerator}`;
        numerator ++ ;
        tr.appendChild(td);
    }
    tableFild.appendChild(tr);
}
const tab = document.querySelectorAll(`.tab `);
document.body.style.padding = "30px"
document.body.append(tableFild);;
