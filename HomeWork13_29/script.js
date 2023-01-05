const roles = {
	admin: "images/educator-svgrepo-com",
	student: "images/student-svgrepo-com",
	lector: "images/boss-svgrepo-com"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "images/user",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "images/user",
		role: "student",

	},
	{
		name: "Noah Smith",
		age: 43,
		img: "images/user",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "images/user",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "images/user",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "images/user",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 100,
				"studentsScore": 85
			}
		]
	},
	{
		name: "Maks Fray",
		age: 53,
		img: "images/user",
		role: "lector"

	},
	{
		name: "Anna German",
		age: 34,
		img: "images/user",
		role: "admin"

	}
]

class  User {
	constructor(name,age,img,role) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
	}
	render () {
		return [`<div class="user">
            <div class="user__info">
                <div class="user__info--data">                 
                    <img src="${this.img}.svg" alt="Jack Smith" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="${roles[this.role]}.svg" alt="student" height="25">
                    <p>${this.role}</p>
                </div>
              </div>  `]
	}
	renderNotCourses(){
		return [`<div class="user">
            <div class="user__info">
                <div class="user__info--data">                 
                    <img src="${this.img}.svg" alt="Jack Smith" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="${roles[this.role]}.svg" alt="student" height="25">
                    <p>${this.role}</p>
                </div>
              </div>  
            </div>  `]

	}

	getGradation(ball) {
		for (let key in gradation) {
			if (key >= ball) {
				return gradation[key];
			}
		}
	}

}
class  Student extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role);
		if (typeof arguments [4] != `undefined`) {
			this.courses = courses;
		}
	}

	render() {
		if (this.hasOwnProperty(`courses`)) {
			return [...super.render(), this.renderCourses()]
		} else {
			return [...super.renderNotCourses()]
		}
	}

	renderCourses() {
		let allCourses = [];
		for (let i = 0; i < this.courses.length; i++) {
			allCourses.push(`<p class="user__courses--course student">
                    ${this.courses[i].title}<span class="satisfactory">${super.getGradation(this.courses[i].mark)}</span>
                         </p>`)
		}
		allCourses = allCourses.join('');
		return `<div class="user__courses">
            ${allCourses}
                 </div>
              </div>`
	}


}

class  Lector extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role);
		if (typeof arguments [4] != `undefined`) {
			this.courses = courses;
		}
	}

	render() {
		if (this.hasOwnProperty(`courses`)) {
			return [...super.render(), this.renderCourses()]
		} else {
			return [...super.renderNotCourses()]
		}
	}

	renderCourses () {
		let allCourses = [];
		for (let i = 0; i < this.courses.length; i++) {
			allCourses.push(`<div class="user__courses--course lector">
                    <p>Title: <b>${this.courses[i].title}</b></p>
                    <p>Lector's score: <span class="satisfactory">${super.getGradation(this.courses[i].score)}</span></p>
                    <p>Average student's score: <span class="very-good">${super.getGradation(this.courses[i].studentsScore)}</span></p>
                </div>`)
		}
		allCourses = allCourses.join('');
		return `<div class="user__courses admin--info">
            ${allCourses}
                 </div>
                 </div> `
	}
}
class  Admin extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role);
		if (typeof arguments [4] != `undefined`) {
			this.courses = courses;
		}
	}

	render() {
		if (this.hasOwnProperty(`courses`)) {
			return [...super.render(), this.renderCourses()]
		} else {
			return [...super.renderNotCourses()]
		}
	}

	renderCourses () {
		let allCourses = [];
		for (let i = 0; i < this.courses.length; i++) {
			allCourses.push(`<div class="user__courses--course admin">
                    <p>Title: <b>${this.courses[i].title}</b></p>
                    <p>Admin's score: <span class="satisfactory">${super.getGradation(this.courses[i].score)}</span></p>
                    <p>Lector: <span class="very-good">${this.courses[i].lector}</span></p>
                </div>`)
		}
		allCourses = allCourses.join('');
		return `<div class="user__courses admin--info">
            ${allCourses}
                 </div>
                 </div> `
	}
}

const Roles = {
	"admin":  (name, age, img, role, courses) => { return  new Admin (name, age, img, role, courses)},
	"student":(name, age, img, role, courses) => { return  new Student (name, age, img, role, courses)},
	"lector": (name, age, img, role, courses) => { return  new Lector (name, age, img, role, courses)},
};

let user = users.map(function (userObj) {
	return Roles[userObj.role] (userObj.name,userObj.age,userObj.img,userObj.role,userObj.courses)
})
console.log(user)



function createNewUser (users) {
	let user = users.map(function (userObj){

		if (userObj.role === `student`){
			return  new Student (userObj.name,userObj.age,userObj.img,userObj.role,userObj.courses);
		}
		else if (userObj.role === `admin`){
			return  new Admin (userObj.name,userObj.age,userObj.img,userObj.role,userObj.courses);
		}
		else if (userObj.role === `lector`){
			return  new Lector (userObj.name,userObj.age,userObj.img,userObj.role,userObj.courses);
		}
	})
	return user;
}

const AllUser = createNewUser (users);
console.log(AllUser)
let strRend =``
let allRend =[];
AllUser.forEach(function (user){
	allRend.push(...user.render());
 })
 strRend = allRend.join(``);
 document.write(`<div class="users">
                               ${strRend}
                </div>
          </div>`);
