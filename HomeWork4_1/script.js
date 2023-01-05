let signs = [];
let numberInput = [];
let validatorOk = [];
let mainValidatorOk = false;

do {
    validatorOk = [];
    numberInput = [];
    signs = prompt(`Input please any math signs`)
    signs= signs.split(``);

    for (i= 0; i < signs.length; i++) {

    if (signs[i]==="+"){
         validatorOk[i] = 1;
     }else if  (signs[i]==="*"){
        validatorOk[i] = 1;
     }else if   (signs[i]==="/"){
        validatorOk[i] = 1;
     }else if   (signs[i]==="-"){
        validatorOk[i] = 1;
    } else {
        validatorOk[i] = 0;
    }
    }

    for (j= 0; j<validatorOk.length; j++ ){
        validatorOk[0] = validatorOk[0]*validatorOk[j];
        mainValidatorOk=validatorOk[0];
        console.log(mainValidatorOk);
    }
    if (!mainValidatorOk){
        alert(`Input error ! You can input only signs + / - *  in any quantity `);
    }
}
while (!mainValidatorOk)
console.log(`validator ok`)

do {
mainValidatorOk =1;
alert (`Input please ${signs.length+1}  number because you input ${signs.length} singh`)

for (i= 1; i < signs.length+2; i++ ){
    numberInput [i] = parseInt(prompt(`Input please ${i} Number singh`))
    console.log(numberInput [i])
}
for (i= 1; i < numberInput.length; i++) {
    if (isNaN(numberInput [i])) {
        mainValidatorOk = 0;

    }
}
if (!mainValidatorOk){
    alert (`You did error input ! Tray agan input only number.`)
}
}
while (!mainValidatorOk)
do {
    if (signs.indexOf(`*`) > -1) {
        let posDelet = signs.indexOf(`*`);
        let posSingh = signs.indexOf(`*`);
        posSingh = +1;
        let posSinghNext = posSingh + 1;
        numberInput[posSingh] = numberInput[posSingh] * numberInput[posSinghNext];
        signs.splice(posDelet, 1);
        numberInput.splice(posSinghNext, 1);
    }
}
 while (signs.indexOf(`*`) > -1)

 do{
        if (signs.indexOf(`/`) > -1) {
            let posDelet = signs.indexOf(`/`);
            let posSingh = signs.indexOf(`/`);
            posSingh = +1;
            let posSinghNext = posSingh + 1;
            numberInput[posSingh] = numberInput[posSingh] / numberInput[posSinghNext];
            signs.splice(posDelet, 1);
            numberInput.splice(posSinghNext, 1);
        }

}
while (signs.indexOf(`/`) > -1)

do {
        if (signs.indexOf(`+`) > -1) {
            let posDelet = signs.indexOf(`+`);
            let posSingh = signs.indexOf(`+`);
            posSingh = +1;
            let posSinghNext = posSingh + 1;
            numberInput[posSingh] = numberInput[posSingh] + numberInput[posSinghNext];
            signs.splice(posDelet, 1);
            numberInput.splice(posSinghNext, 1);
        }
    }
while (signs.indexOf(`+`) > -1)

do{
        if (signs.indexOf(`-`) > -1) {
            let posDelet = signs.indexOf(`-`);
            let posSingh = signs.indexOf(`-`);
            posSingh = +1;
            let posSinghNext = posSingh + 1;
            numberInput[posSingh] = numberInput[posSingh] - numberInput[posSinghNext];
            signs.splice(posDelet, 1);
            numberInput.splice(posSinghNext, 1);
        }
    }
while (signs.indexOf(`-`) > -1)
    numberInput.splice(0, 1);
    alert (`Answer = ${numberInput}`);





