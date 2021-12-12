// console.log(sum(1,41)) //42

// function sum (a,b) {
//     return a+b;
// }

// var i;
// console.log(i);  //undefined
// i = 42;
// console.log(i); //42

// console.log(num); // Cannot access 'num' before initialization
// const num = 42
// console.log(num)

// function expresion & function declaration
// console.log(square(25));
// function square(num) {  //function declaration
//     return num **2
// }
var square = function(num) {       // function expresion = ошибка square is not a function если консоль лог был задан ранее.
    return num **2
}
console.log(square(25));