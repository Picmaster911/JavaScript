/*
let inputVarFirst = prompt(`Input please first number`);
let inputVarSecond = prompt(`Input please second number`);
let inputVarThird =  prompt(`Input please third number`);
let meanValue =0;

if (inputVarFirst!=null && inputVarSecond!=null && inputVarThird!=null ){
    inputVarFirst.trim();
    inputVarSecond.trim();
    inputVarThird.trim();

if (parseInt(inputVarFirst) && parseInt(inputVarSecond) && parseInt(inputVarThird)){
    inputVarFirst = parseInt(inputVarFirst);
    inputVarSecond = parseInt(inputVarSecond);
    inputVarThird = parseInt(inputVarThird);
    meanValue = (inputVarFirst+inputVarSecond+inputVarThird)/3;
    alert(`Mean value = ${meanValue}`)
}
else {
    alert(`Your input not correctly. Check input true way `)
}
}*/
let firstNumber = parseFloat(prompt(`Input please first number`));
let secondNumber = parseFloat(prompt(`Input please second number`));
let thirdNumber =  parseFloat(prompt(`Input please third number`));

let arithmeticMean = (firstNumber + secondNumber + thirdNumber)/3;

if(isNaN(arithmeticMean))
{
    alert(`You input numbers was incorrect, please use only numbers.`);
}
else
{
    alert(`The arithmetic mean of this numbers is ${arithmeticMean}`);
}
