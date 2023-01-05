obj = {
    X:12,
    Y:3,
    Sing: `/`
}
class SuperMath {

    check (newObjOut) {
        let answer = prompt(`Вы потверждаетет действие ${newObjOut.X} ${newObjOut.Sing} ${newObjOut.Y} (yes или no введите)`)
        if ( answer !== `yes` && `undefined` && answer !== `no` || answer === `null` || answer === `undefined`  ){
            console.log(answer)
            this.check(newObjOut);
        }
        answer = answer.toLowerCase();
        if (answer === `yes`){
            return true
        }
    }

    input () {
        let newObj ={};
        newObj.X = parseInt(prompt (`Ведите X`));
        newObj.Y =parseInt(prompt (`Ведите Y`));
        do {
            newObj.Sing = prompt (`Ведите знак может быть +, - ,/ ,* ,%`);
        }
        while (newObj.Sing !== `+` && newObj.Sing !== `-` && newObj.Sing !== `/` && newObj.Sing !== `*` )
        return Number (this.math(newObj));
    }

    math (objMach) {
        switch (objMach.Sing) {
            case '+':
                return objMach.X + objMach.Y;
            case '-':
                return objMach.X - objMach.Y;
            case '*':
                return objMach.X * objMach.Y;
            case '/':
                return objMach.X / objMach.Y;
            case '%':
                return objMach.X / 100 * objMach.Y;
        }
    }
}
let Ekx = new SuperMath();
console.log(Ekx);
let result = 0;
Ekx.check(obj) ?  result = Ekx.math(obj) : result = Ekx.input();
alert(`Результат ${result}`)
