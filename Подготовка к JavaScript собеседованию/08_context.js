// const person = {
//     surname : 'Stark',
//     knows : function (what,name) {
//         console.log(`You know ${what}, ${name} ${this.surname}`)
//     }
// }

// const john = {
//     surname: 'Snow'
// }
// person.knows('everything', 'Bran');                 //You know everything, Bran Stark
// person.knows.call(john, 'nothing', 'John')          //You know nothing, John Snow
// person.knows.apply(john, ['nothing', 'John'])       //You know nothing, John Snow
// person.knows.call(john, ...['nothing', 'John'])     //You know nothing, John Snow
// person.knows.bind(john, 'nothing', 'John') ()       //You know nothing, John Snow


//
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// const elena = new Person ('Elena', 20)


// explicit binding - явная передача контекста
function logThis() {
    console.log(this)
}
const obj = {num:42}
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();


// implicit binding - неявная передача контекста
const animal = {
    legs:4,
logThis: function(){
    console.log(this)
}}
animal.logThis()


//Arrow funciton
function Cat(color) {
    this.color = color;
    console.log('This', this);
    ( () => console.log('Arrow this', this))()
}
new Cat('black')
new Cat('red')