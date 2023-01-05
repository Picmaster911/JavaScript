let periodYear = "";
let categoryProduct = "";
let product = "";
let count = 0;
let error = false;
let totalPrice = 0;
let fruitsImgPath = ["images/fruits/grapes.svg", "images/fruits/raspberry.svg", "images/fruits/coconut.svg",];
let vegetablesImgPath = ["images/vegetables/cabbage.svg", "images/vegetables/avocado.svg", "images/vegetables/tomato.svg"];

debugger
do {
    periodYear = prompt(`Winter or summer period ?`)
    if (periodYear === null || periodYear === ``) {
        alert(`You put cancel !`)

    } else {
        periodYear = periodYear.toLowerCase().split(" ").join("")
    }
    if (periodYear != `winter` && periodYear != `summer`) {
        alert(`You put not true period !`)
    }
} while (periodYear === null || periodYear === `` || periodYear != `winter` && periodYear != `summer`)

do {
    categoryProduct = prompt(`Choose category  in which you wont to buy products: vegetables or fruits  ?`)

    if (categoryProduct === null || categoryProduct === ``) {
        alert(`You put cancel !`)
    } else {
        categoryProduct = categoryProduct.toLowerCase().split(" ").join("")
    }
    if (categoryProduct != `vegetables` && categoryProduct != `fruits`) {
        alert(`You put not true category !`)
    }
} while (categoryProduct === null || categoryProduct === ``||categoryProduct != `vegetables` && categoryProduct != `fruits`)
console.log(categoryProduct)

if (categoryProduct === `vegetables`) {

    vegetables = ["cabbage", "avocado", "tomato"];
    do {
        product = prompt(`Choose product from category vegetables ${vegetables} ?`)
        if (product === null || product === ``) {
            alert(`You put cancel !`)
        } else {
            product = product.toLowerCase().split(" ").join("");
        }
    } while (product === null || product === ``|| vegetables.indexOf(product)<0)
    console.log(product);
    do {
        count = parseInt(prompt(`Input count of ${product} must be more one  `))
        if (isNaN(count) || count < 1) {

        }
    } while (isNaN(count) || count < 1)
    let priceVegetables = [8, 30, 10]
    if (periodYear === `winter`) {
        sale = 2;
    } else {
        sale = 0.8;
    }
    switch (product) {
        case "cabbage":
            totalPrice = count * priceVegetables[0] * sale;
            document.write(`
             <div class="product" align="center">
   <img src= ${vegetablesImgPath[0]} + "alt="cabbage" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);
            break;
        case "avocado":
            totalPrice = count * priceVegetables[1] * sale;
            document.write(`
             <div class="product" align="center">
    <img src= ${vegetablesImgPath[1]} + "alt="avocado" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);
            break;
        case "tomato":
            totalPrice = count * priceVegetables[2] * sale;
            document.write(`
             <div class="product" align="center">
    <img src= ${vegetablesImgPath[2]} + "alt="tomato" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);

    }
}
if (categoryProduct === `fruits`) {
    fruits = ["grapes", "raspberry", "coconut"];
    do {
        product = prompt(`Choose product from category fruits ${fruits} ?`)
        if (product === null || product === ``) {
            alert(`You put cancel !`)
            error = true;
        } else {
            product = product.toLowerCase().split(" ").join("");
        }

    } while (product === null || product === `` || fruits.indexOf(product)<0 )
    console.log(product);
    do {

        count = parseInt(prompt(`Input count of ${product} must be more one  `))
        if (isNaN(count) || count < 1) {
            error = true;
        }
    } while (isNaN(count) || count < 1)

    let priceFruits = [20, 25, 50]
    if (periodYear === `winter`) {
        sale = 2;
    } else {
        sale = 0.8;
    }
    switch (product) {
        case "grapes":
            totalPrice = count * priceFruits[0] * sale;
            document.write(`
             <div class="product" align="center">
           
         
   <img src= ${fruitsImgPath[0]} + "alt="grapes" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);
            break;
        case "raspberry":
            totalPrice = count * priceFruits[1] * sale;
            document.write(`
             <div class="product" align="center">
    <img src= ${fruitsImgPath[1]} + "alt="raspberry" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);
            break;
        case "coconut":
            totalPrice = count * priceFruits[2] * sale;
            document.write(`
             <div class="product" align="center">
    <img src= ${fruitsImgPath[2]} + "alt="coconut" width="100" height="100">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product+`s`}: <b>${count}</b></p>
    <p>Selected period: <b>${periodYear}</b></p>
    <p>Selected category: <b>${categoryProduct}</b></p>
    <p>Final sum: <b>${totalPrice} UAH</b></p>
    </div>
`);
    }

}
