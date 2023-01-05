
array1 =  [1,2,3, 'hello',4,5];
array2 =[1,2,3, true, 4, undefined, 6];

let bigArray = arraySumm(array1,array2);
console.log(bigArray);

function arraySumm (array1,array2){

    let result  = [0,0]
    for (let i=0; i < arguments.length; i++){
        for (let j=0; j < arguments[i].length; j++){
            if (!isNaN(arguments[i][j])&& typeof arguments[i][j]!=='boolean' ){
                result[i]= result[i] + arguments[i][j];
            }
        }
    }
    return result[0] > result[1] ? array1: array2
}
