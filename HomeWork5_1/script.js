let arrayLength = 0;
let arrayNumber =[];
let sortArray = [];
let temp =0;
debugger
do {

    arrayLength = prompt(`Input number of array `);
    if (arrayLength === null || arrayLength ===``|| isNaN(arrayLength) ){
        alert(`Input error tray again input only number `)

    }
} while (arrayLength === null || arrayLength ===``|| isNaN(arrayLength) );
console.log(arrayLength);
arrayLength = parseInt(arrayLength);

for (i= 0; i < arrayLength; i++){
    do {
        arrayNumber[i] =prompt(`Input number of array [${i}] `);
      if (arrayNumber[i] === null || arrayNumber[i] ===``|| isNaN(arrayNumber[i]) ) {
          alert(`Input error tray again input only number `)
      }
        arrayNumber[i]=parseInt(arrayNumber[i]);
  } while (arrayNumber[i] === null || arrayNumber[i] ===``|| isNaN(arrayNumber[i]) )
}
console.log(arrayNumber);
for (i = 0; i < arrayNumber.length-1; i++) {
    for (j = 0; j < arrayNumber.length-1; j++) {
        if (arrayNumber[j] > arrayNumber[j + 1]) {
            temp = arrayNumber[j];
            arrayNumber[j] = arrayNumber[j + 1]
            arrayNumber[j + 1] = temp;
            document.write(`
<div class="array" align="center">
  <p style="font-size: 22px; color: midnightblue"> Sort array after shift ${arrayNumber}</p>
</div>`)

        }
    }
}
sortArray = arrayNumber.slice(0);
arrayNumber.splice(2,3);
document.write(`
<div class="product" align="center">
  <p style="font-size: 22px; color: midnightblue"> Sort array ${sortArray}</p>
  <p style="font-size: 22px; color: midnightblue"> Sort array after cut ${arrayNumber}</p>
</div>`)

