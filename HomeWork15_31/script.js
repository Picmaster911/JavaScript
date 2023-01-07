class  Hamburger {
constructor (){
    this.size = `small`
    this.profile = {
         price : 5,
         calories: 20,
    }
    this.type =`cheese`
}
     setSize (size){
    if (size === `big`){
        this.size = `big`;
        this.profile.price = 10;
        this.profile.calories = 40;
    }
        else {
        this.size =`small`;
        this.profile.price = 5;
        this.profile.calories = 20;

    }
    }
    setType (type){
        if (type === `cheese` || type === `salad` || type === `potato` ){
            this.type = type
        }
    }
    setSpice (type){
        if (type === `spice`){
            this.spice = `spice`
        }

        if (type === `ketchup`){
            this.spice = `ketchup`
        }
    }

    getPriceAndCalories(){
        const allType = {
            cheese: () => [{price: this.profile.price + 1, calories: this.profile.calories}],
            salad: () => [{price: this.profile.price + 2,calories: this.profile.calories + 5}],
            potato: () => [{price:this.profile.price + 1.5,calories: this.profile.calories + 10}],
            spice: () => [{price:1.5,calories:0}],
            ketchup: () => [{price:2,calories:5}],
        }
        if (this.spice){
            const totalProfile= {price:0,calories:0}
            let allHum = [...allType[this.type](),...allType[this.spice]()]
            allHum.forEach((hum)=>{
                totalProfile.price += hum.price
                totalProfile.calories += hum.calories
            })
            return [totalProfile]
        }
        return allType [this.type] ();
    }
}
let Hum = new Hamburger();
debugger
console.log(Hum)
console.log(...Hum.getPriceAndCalories())
Hum.setType(`salad`)
console.log(Hum)
console.log(...Hum.getPriceAndCalories())
Hum.setSpice(`spice`)
console.log(Hum)
console.log(...Hum.getPriceAndCalories())
Hum.setSize(`big`)
console.log(Hum)
console.log(...Hum.getPriceAndCalories())
Hum.setSpice(`ketchup`)
console.log(Hum)
console.log(...Hum.getPriceAndCalories())
