class Present {
    constructor(img,wish) {
        this.img = img;
        this.wish = wish;
    }

    render (){
        return `<div class="carta">   
                 <div class="img">
                   <img src="images/${this.img}.png">  
                 </div>          
                   <p class="par">${this.wish}</p>                                                  
           </div>`
}
}

const wish = [
    {
        img: `3d_casual`,
        wish:`Желаю красное авто, мягкую шубу и манто, и чтобы везло — год напролет, без сбоев, проблем и забот!`
    },
    {
        img: `3d_casual`,
        wish:`С Новым годом! Пускай этот год начинается со счастья, хорошего настроения и волшебства. Пускай любовь окунет вас в настоящую сказку !`
    },
    {
        img: `3d_casual`,
        wish:`Любви — в полнебосвода! И пусть в Новогоднюю Ночь исполнятся все желания!`
    },
    {
        img: `3d_casual`,
        wish:`С Новым годом! Пусть удача будет с тобой круглый год, пусть новый год обойдётся без проблем и забот!`
    },

]
let random = Math.floor(Math.random() * 4 ) ;

const arrayWish = wish.map( (wish,index) => {
    if (random === index) {
        return new Present (`3d_opent`,wish.wish)
    }
    return new Present (wish.img,``)
})

let rendWish = arrayWish
    .map (wish =>{
        return  wish.render ()

    })
    .join(``)

console.log (rendWish)
console.log (arrayWish)
document.write (`
              <div class="main">
                  ${rendWish}
              </div>`)