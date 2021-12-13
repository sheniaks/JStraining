// __proto__
//Object.getPrototypeOf()

// function Cat (name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says MEOW`);
// }

// const cat = new Cat('Fluffy', 'white')
// cat.voice();                                            //Cat Fluffy says MEOW
// console.log(Cat.prototype);                             //{voice: ƒ, constructor: ƒ}
// console.log(cat);                                       //Cat {name: 'Fluffy', color: 'white'}
// console.log(cat.__proto__ === Cat.prototype);           //true
// console.log(cat.constructor);                           //ƒ Cat (name, color)

// ===============
function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';
const person = new Person();
person.name = 'Alex';
// console.log('skin' in person);               //ture
// console.log(person.legs);                    //2
// console.log(person.hands);                   //undefined
// console.log(person.hasOwnProperty('name'))      //true
// console.log(person.hasOwnProperty('skin'))      //false

// Object.create()
let proto = { year: 2022 };
const myYear = Object.create(proto);
console.log(myYear.year); //2022

// proto.year= 2200;
// console.log(myYear.year);           //2200

proto = { year: 999 };
console.log(myYear.year); //Uncaught TypeError: Assignment to constant variable. Если меняем вверху const на let то значение не меняется

// console.log(myYear.hasOwnProperty('year'));     //false
// console.log(myYear.__proto__ === proto);        //true
