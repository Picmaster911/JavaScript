// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }
// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:
// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

console.log (convertObj (obj));

function  convertObj (oldObj){
    let newObj= {};
    for (let key in oldObj ){
        if (typeof oldObj[key] === `object`){
            let objN = convertObj(oldObj[key])
            for ( key in objN){
                newObj[key] = objN[key]
            }
        }
        else {
            newObj[key] = oldObj[key]
        }
    }
    return newObj;
}

