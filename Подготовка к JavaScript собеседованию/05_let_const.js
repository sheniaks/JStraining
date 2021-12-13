// // Let
// let a = 'variable a';
// let b = 'variable b';

// {
//     a='New variable a';
//     let b = 'local variable b';
//     console.log(a,b);           //New variable a local variable b
// }
// console.log(a,b);               // New variable a variable b


// Const 
const PORT = 8080;
// PORT = 2000;   // Uncaught TypeError: Assignment to constant variable
const array = ['Js','is', 'awesome'];
array.push('!');
array[0]='JS';
console.log(array); //['JS', 'is', 'awesome', '!']

const obj = {}
obj.name = 'Alex';
obj.surname = 'Sheniak';
obj.age =28;
console.log(obj);   //{name: 'Alex', surname: 'Sheniak', age: 28}
delete obj.age;   
console.log(obj);   // {name: 'Alex', surname: 'Sheniak'}