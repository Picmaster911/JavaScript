let inputNumberOne =0;
let inputNumberTwo =0;
let stepIndexAdd =0;
let validatorOk = false;
let indexFact = 0;
let tempMath = [];

do {
    inputNumberOne = parseInt(prompt(`Input number One `));
    inputNumberTwo = parseInt(prompt(`Input number Too `));
    stepIndexAdd = parseInt(prompt(`Input number Too`));

    if (inputNumberOne != null && inputNumberTwo != null && stepIndexAdd != null
        && inputNumberOne != "" && inputNumberTwo != "" && stepIndexAdd != ""
        && !isNaN(inputNumberOne) && !isNaN(inputNumberTwo) && !isNaN(stepIndexAdd)) {
        validatorOk = true;
    }

    if (!validatorOk){
    alert(`Error input ! input only number tray again !`)
}
     if (inputNumberOne>inputNumberTwo){
        alert(`Error input ! Number too must be up then number one!`)
        validatorOk = false;
    }
}
while (!validatorOk);
indexFact = Math.floor ((inputNumberTwo-inputNumberOne)/stepIndexAdd);

    tempMath [0] = inputNumberOne
    for(i = 1; i < indexFact+1; i++) {
        tempMath [i] =  tempMath [i-1] + stepIndexAdd;
        tempMath [0]=tempMath [0]*tempMath [i]
        console.log(tempMath [i])
        console.log(tempMath [0])
    }
alert(`Answer factorial number one ${inputNumberOne} to number two ${inputNumberTwo} \n with selected step ${stepIndexAdd} = ${tempMath [0]}`)

