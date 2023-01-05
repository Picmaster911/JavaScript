//  Функція generateKey(length, characters),

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
document.write(`<span>${key.join(``)}</span>`);

function  generateKey (count,keyArray){
    let newKey = [];
    for (let i=0; i<count; i++){
        newKey.push(keyArray[Math.floor(Math.random() * (keyArray.length))])
    }
    return newKey;
}

