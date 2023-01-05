let kitchenProducts = [
    {
        type: 'grater',
        price: [10,100]
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];
let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];
let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

function NewObj (type, price,category) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function () {
        return `<tr>
                 <td><img src="images/${this.category}/${this.type}.svg"  alt="${this.type}" width="50" height="50"></td>
                 <td>${this.type}</td>
	             <td>${this.price} USD</td>
             </tr>`
    }
}

function  createObj (arrayOfProduct,category) {
    const nObj = arrayOfProduct
        .map(function (item) {
            if (Array.isArray(item.price)){
                item.price = item.price.join(`-`)
            }
            return new NewObj(item.type, item.price, category)
        })
    return nObj;
}

kitchenProducts = createObj(kitchenProducts,`kitchen`);
devicesProducts = createObj(devicesProducts,`devices`);
cosmeticsProducts = createObj(cosmeticsProducts,`cosmetics`);
console.log(kitchenProducts)
const allObjProduct = [...kitchenProducts,...devicesProducts,...cosmeticsProducts]
const rendString = allObjProduct
    .map(function (item){
        return item.render()
    })
    .join(``)

	document.write(`
		<table>
			<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>${rendString}</tbody>
		</table>
	`)


