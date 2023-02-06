let answer = ``;
let typeCurNow = ``;
let arrayForValidator = [];
let userData = {
        'USD': 1000,
        'EUR': 900,
        'UAH': 15000,
        'BIF': 20000,
        'AOA': 100
    },
    bankData = {
        'USD': {
            max: 3000,
            min: 100,
            img: '💵'
        },
        'EUR': {
            max: 1000,
            min: 50,
            img: '💶'
        },
        'UAH': {
            max: 0,
            min: 0,
            img: '💴'
        },
        'GBP': {
            max: 10000,
            min: 100,
            img: '💷'
        }
    }

function getMoney (userData,bankData){
    do {
        answer = prompt( `Посмотреть баланс на карте введите Yes ли No` ).toUpperCase();
    }
    while (answer !== `YES` && answer !== `NO` );
    return new Promise((resolve,reject) =>{
        answer === `YES` ? resolve(userData): reject(bankData);
    })
}

function  validator (exp) {
    return  arrayForValidator.includes(exp);
}

function showBill (showMany,getType){
    arrayForValidator = [];
    for (const currency in showMany){
        if (getType){
            if (bankData.hasOwnProperty(currency)){
                if ( bankData[currency].max > 0){
                    arrayForValidator.push(currency);
                }
            }
        }
        else {
            arrayForValidator.push(currency);
        }
    }
    do{
        answer = prompt( `Выберите тип валюты : ${arrayForValidator.join(` :`)}` ).toUpperCase();
    }
    while (!validator(answer));
    typeCurNow = answer;
    return  getType ? answer : `На вашем счете - ${showMany[answer]}-${answer}`;
}

getMoney(userData,bankData)
    .then(
        showMoney => {return  showBill(showMoney);},
        () => {return Promise.reject(showBill(userData,`getType`));}
    )
    .then(
        msg => {
            console.log(msg);
        },
        typeCur => {
            do{
                answer = parseInt(prompt( `Введите сумму для снятия `));
            }
            while (isNaN(answer))
            if ( bankData[typeCur].max < answer ){
                console.log(`Введенная сумма превышает лимит в банкомате, лимит ${bankData[typeCur].max} ${typeCurNow}`);
            }
            else if ( bankData[typeCur].min > answer ){
                console.log(`Введенная сумма меньше мин купюры в банкомате, лимит ${bankData[typeCur].min} ${typeCurNow}`);
            }
            else {
                return Promise.reject(answer);
            }
        }
    )
    .then(
        answer => {},
        answer => {
            alert(`Вот ваши деньги ${answer} ${typeCurNow}`);
            console.log(`Вот ваши деньги ${answer} ${typeCurNow}`)
        }
    )
    .finally(
        () => {
            console.log(`Спасибо хорошего дня !`);
        }
    )
