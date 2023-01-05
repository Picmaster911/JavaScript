let result = main(4,6, sum);
console.log(result);
function main (a=2, b=3, c) {
    if (typeof c === `function`) {
        return  c(a,b);
    }
return sum (a, b);
}
function  sum (a, b) {
    return a+b;
}

