// function Person (firstName, lastName, age){
//     this.fistName = firstName;
//     this.lastName = lastName;
//     this.age = age
//     this.renderToConsole = function() {
//         console.log(`Name of person is ${this.fistName}, and lastname is ${this.lastName} age of ${ this.age}`);
//         return `Name of person is ${this.fistName}, and lastname is ${this.lastName} age of ${ this.age}`
//     }
// }
//
// function CreateCar (type, model, yearsOfRelease, number,){
//     this.type = type;
//     this.model = model;
//     this.yearsOfRelease = yearsOfRelease;
//     this.number = number;
//     this.putOwner = function (personObj) {
//         personObj.age > 18 ? this.Owner =  personObj: console.log(`Aged less 18 and is ${personObj.age} you can not save information`)
//     }
//     this.renderToConsole = function (){
//         if (typeof this.Owner === `object` ){
//             console.log(`Car is type ${this.type} model ${this.model} years of release ${this.yearsOfRelease}
//         number ${this.number} owner ${this.Owner.renderToConsole()}`)
//         }
//         else {
//             console.log(`Car is type ${this.type} model ${this.model} years of release ${this.yearsOfRelease}
//         number ${this.number} owner empty car is free `)
//         }
//
//     }
// }
// const personAnna = new Person(`Anna`,`Derbo`,19);
// const personAnton = new Person(`Anton`,`Fedorenko`,12);
// const carT = new CreateCar(`Tesla`,`S`,`2021`,`AA6868HO`);
// const carS = new CreateCar(`Skoda`,`Kodiaq`,`2016`,`AE7281HO`);
// console.log(personAnna)
// console.log(carT)
// personAnna.renderToConsole();
// personAnton.renderToConsole();
// carS.putOwner(personAnton);
// carS.putOwner(personAnna);
// console.log(carS);
// carS.renderToConsole();
// carT.renderToConsole();
// console.log(carS)

const Obj = {
      a1: 14,
      a2:45,
      ds: 12,
      df: {
          s:12,
          f:23,
          df:34,
          gh:{
              gf:33,
              fs:55,
              kj:77,
          }
      }
    }


function up (obj){
    const newObj ={};
    for (const key in obj) {
       if (typeof obj[key] ===`object`){
           const tempObj = up (obj[key])
           Object.assign(newObj,tempObj);
       }
        else {
            newObj[key] = obj[key]
       }
    }
    return newObj
}
debugger
console.log(up(Obj));