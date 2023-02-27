export  function  renderUser (arrayObjects){
    const table =  document.querySelector(`#users`);
    const  tr = document.createElement(`tr`);
    for (const key in arrayObjects) {
        const  td = document.createElement(`td`)
            td.innerText = `${arrayObjects[key]}`;
        tr.append(td)
    }
    console.log(tr)
    table.append(tr);
}
