// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый,
// который состоит из свойств обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

let objOne ={
    x: 10,
    h: 20
}
let objTwo = {
    z: 30,
    y: 40,
    x: 70,
    k: 30
}
let objOneS ={
    x: 10,
    y: 18,
    h: 33,
    l: 12
}
let objTwoS = {
    x: 20,
    y: 30
}
console.log(assignObjects (objOne,objTwo));
console.log(assignObjects(objOneS,objTwoS));

function  assignObjects (orObj1,orObj2){
    let obj1 = {};
    let obj2 = {};
    let lengthObj1 = 0;
    let lengthObj2 = 0;
    for (let key in orObj1){
        obj1[key] = orObj1[key]
        lengthObj1 ++;
    }
    for (let key in orObj2){
        obj2[key] = orObj2[key]
        lengthObj2 ++;
    }
    if (lengthObj1 >= lengthObj2++){
    lengthObj1 = 0;
    lengthObj2 = 0;
    for (let key1 in obj1){
        for (let key2 in obj2){
            if (key1 === key2){
                obj1[key1] = obj2[key2];
                delete obj2[key2]
            }
        }
    }
    for (let key in obj2){
        lengthObj2++;
    }
    if (lengthObj2 > 0 ) {
        for (let key in obj2){
            obj1[key] =  obj2[key]
        }
    }
        return obj1
}
    else {
        lengthObj1 = 0;
        lengthObj2 = 0;
        for (let key2 in obj2){
            for (let key1 in obj1){
                if (key2 === key1){
                    obj1[key1] = obj2[key2];
                    delete obj1[key2]
                }
            }
        }
        for (let key in obj1){
            lengthObj1++;
        }
        if (lengthObj1 > 0 ) {
            for (let key in obj1){
                obj2[key] =  obj1[key]
            }
        }
        return obj2
    }
}
