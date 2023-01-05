
let sum = sumNew(0);
console.log(sum(3))
console.log(sum(5))
console.log(sum(20))


function  sumNew (arg){
    return function sum (num){
        return arg = arg + num;
    }
}

