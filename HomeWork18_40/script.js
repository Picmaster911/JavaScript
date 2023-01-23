
const array = [2,3,4,[2,3],3,4,5,[3,2,[4,45,[3,4]]],34,5,56,878,]

function createLi (array,index){
    let count = index;
    const ul = document.createElement(`ul`);
    array.forEach( (item,index) => {
        if (Array.isArray(item)) {
           ul.append(createLi(item,index));
            count = 0;
        }
        else{
                const li = document.createElement(`li`);
            count > 0 ? li.innerText = `${count}.${item}`: li.innerText = item;
                ul.append(li);
        }
    })
    count = 0;
    return ul;
}
const allUl = createLi(array);
document.body.append(allUl);