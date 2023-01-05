let amount = 100;
let monday = [
    ['Write a tutorial',180],
    ['Some web development',120]
];
let tuesday = [
    ['Keep writing that tutorial',240],
    ['Some more web development',360],
    ['A whole lot of nothing',240]
];

function mulAndPush (arr,amount) {
    let  newArray = arr.map(function (array) {
        array.push(array[1] * amount);
        return array;
    })
    return newArray;
}
function convertArray (arr) {
    let  newArray = arr.map(function (array) {
        return array.map(function (inArray) {
            if (typeof inArray === `number`) {
                return inArray = inArray / 60;
            }
            return inArray;
        })
    })
    return newArray;
}
function filtrArr (arr) {
    let  newArray = arr.filter (function (array){
        return array[1] > 2;
    })
    return newArray;
}
monday = convertArray(monday);
tuesday = convertArray(tuesday);
monday = filtrArr(monday);
tuesday = filtrArr(tuesday);
monday = mulAndPush(monday,amount);
tuesday = mulAndPush(tuesday,amount);
let allTask = monday.concat(tuesday);

renderArray = allTask.map(function (arr){
    return arr = `<tr>
                  <td> Task name:${arr[0]}</td>
                  <td> Taks duration:${arr[1]} hours</td>
                  <td>Task amount: ${arr[2]} </td>
                  </tr>`
})
document.write(`<table>${renderArray.join(``)}</table>`);
