function connection (method,action,callback){
    const xml = new XMLHttpRequest ();
    xml.open(method,action);
    xml.send();

    xml.addEventListener(`readystatechange`,()=>{
        const parse = req => JSON.parse(req);
        if (xml.readyState === 4 && xml.status === 200){
           const req = parse(xml.response).children
             callback (req);
        }
    })
}
connection (`GET`,`data.json`,splitData);
connection (`GET`,`data2.json`,splitData);

let array = [];
function splitData (req){
    array.push(req);
    console.log(`${array}`)
}