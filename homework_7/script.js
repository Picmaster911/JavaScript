const arrayOld = [3,4,3,5,3,1,3,3];
let arrayNew = [];

arrayNew = removeAllElement(arrayOld,3,4);
 console.log(arrayOld);
 console.log(arrayNew);

setInterval(()=> {console.log(afterCut)},1000)
function removeAllElement (array,item){
    afterCut = array.slice(0);
    if (array.indexOf(item) !== -1 ){
        for (i = 0; i <= array.length; i++){
            if (afterCut[i] === item && i < afterCut.length){
                afterCut.splice(i,1);
                i--;
            }
        }
        return afterCut;
    }
    else{
        return array;
    }
}
