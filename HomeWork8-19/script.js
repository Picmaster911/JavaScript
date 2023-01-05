
let list = [1,2,3,4,5,6,7,8]
debugger
let newList = copy(list,func)
console.log(newList);
console.log(list);

function func (value,mul){
    return value * mul;
}
function copy (array,func){
    let copyArray =[];
    for (let i=0; i<array.length; i++ ){
   copyArray.push(array[i])
        if (typeof func ===`function`){
            copyArray[i] = func(copyArray[i],10);
        }
    }
return copyArray;
}
