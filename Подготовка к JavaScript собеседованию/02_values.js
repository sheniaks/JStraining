// let a = 42;
// let b = a;
// b++;
// console.log(a,b)
// console.log(a == b) //false
// console.log(a === b) //false

let a = [1,2,3];
let b = a;
b.push(4);
console.log(a == b) //true
console.log(a === b) // true
let c = [1,2,3,4];
console.log(a,b) //(4) [1, 2, 3, 4] (4) [1, 2, 3, 4]
console.log(a === c) // false 