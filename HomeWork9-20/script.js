// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
//     Знайти мінімальний елемент масиву та його порядковий номер.
//     Знайти максимальний елемент масиву та його порядковий номер.
//     Визначити кількість негативних елементів./
//     Знайти кількість непарних позитивних елементів./
//     Знайти кількість парних позитивних елементів./
//     Знайти суму парних позитивних елементів.
//     Знайти суму непарних позитивних елементів.
//     Знайти добуток позитивних елементів.
//     Знайти найбільший серед елементів масиву, ост альні обнулити.
let Array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let minValueAndIndex =Array.reduce(function (minValue,nowValue,index){
    return  minValue < nowValue ?  minValue : minValue = nowValue;
},0)

let maxValueAndIndex =Array.reduce(function (maxValue,nowValue,index){
    return  maxValue > nowValue ?  maxValue : maxValue = nowValue;
},0)

minusValue = Array.filter(function (array){
  return array < 0;
})

plusValue = Array.filter(function (array){
    return array > 0;
})

 function  findDifferentElement (array){
     let sameArray=[];
     let newArray=[];
     array.forEach(function (value){
        if (value > 0){
            sameArray = array.filter(function (item){
                return item === value;
            })
            if (sameArray.length === 1)
            newArray.push(value)
        }
     })
     return newArray;
}

 function  findSameElement (array,element){
    let newArray = [];
     array.forEach(function (value){
         if (value === element && value > 0){
            newArray.push(value);
        }
    })
return newArray;
}

function  findMaxValue (array){
    let maxValue = 0;
    array.forEach(function (value,index){
        value > maxValue ? maxValue = value : maxValue = maxValue;
    })
    return maxValue;
}

let sameElementAllArray= [];
let sameElement = [];
Array.forEach(function (value) {
    if (sameElementAllArray.indexOf(value) < 0) {
        sameElement = findSameElement(Array, value);
    }
    if (sameElement.length>1){
        sameElementAllArray = sameElementAllArray.concat(sameElement);
    }
})
let sumParaElement =sameElementAllArray.reduce(function (sum,value,index){
    return sum+value;
},0)
let noPare = findDifferentElement (Array);

let sumNoParaElement =noPare.reduce(function (sum,value,index){
    return sum+value;
},0)
let mul = 0;
Array.forEach(function (value,index){
    if (index === 0) mul = value;
    if (value > 0 && index > 0)  mul *= value;
})

let fdMaxValue = findMaxValue (Array);
let zeroArray = Array.map(function (value){
    return  value !== fdMaxValue ? value = 0 : value = fdMaxValue;
})
console.log(` мінімальний елемент масиву ${minValueAndIndex} порядковий номер ${Array.indexOf(minValueAndIndex)}`)
console.log(` максимальний елемент масиву ${maxValueAndIndex} порядковий номер ${Array.indexOf(maxValueAndIndex)}`)
console.log(` кількість непарних позитивних елементів ${noPare.length}`)
console.log(` кількість парних позитивних елементів ${sameElementAllArray.length} - та самі єлементи ${sameElementAllArray.join(`:`)}`)
console.log(` сума парних позитивних елементів ${sumParaElement}`)
console.log(` сума непарних позитивних елементів ${sumNoParaElement}`)
console.log(`добуток позитивних елементів ${mul}`)
console.log(`найбільший серед елементів масиву, остальні обнулині ${zeroArray.join(`:`)}`)

renderArray =   [`<tr><td>мінімальний елемент масиву ${minValueAndIndex} порядковий номер ${Array.indexOf(minValueAndIndex)}</td></tr>
                  <tr> <td>максимальний елемент масиву ${maxValueAndIndex} порядковий номер ${Array.indexOf(maxValueAndIndex)}</td></tr>
                  <tr> <td>кількість непарних позитивних елементів ${noPare.length} та самі єлементи ${noPare.join(` : `)}</td></tr>
                  <tr> <td>кількість парних позитивних елементів ${sameElementAllArray.length} - та самі єлементи ${sameElementAllArray.join(` : `)}</td></tr>
                  <tr> <td>сума парних позитивних елементів ${sumParaElement}</td></tr>
                  <tr> <td>сума непарних позитивних елементів ${sumNoParaElement}</td></tr>
                  <tr> <td>добуток позитивних елементів ${mul}</td></tr>
                  <tr> <td>найбільший серед елементів масиву, остальні обнулині ${zeroArray.join(` : `)}</td></tr>                 
               `]
document.write(`<table>${renderArray.join(``)}</table>`);

