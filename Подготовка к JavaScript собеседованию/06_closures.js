// function sayHelloTo(name) {
//     const message = 'Hello ' + name;
//     return function() {
//         console.log(message);
//     }
// }

// const helloToAlex = sayHelloTo('Alex ')
// console.log(helloToAlex);
// helloToAlex();

function createFrameworkManager() {
    const fw = ['Angular', 'React'];
    return {
        print : function() {
           console.log(fw.join(' '));
        },
        add : function(framework) {
            fw.push(framework);
        }
    }
}

// const manager = createFrameworkManager()
// console.log(manager);                       //{print: ƒ, add: ƒ}
// //console.log(fw);                          //fw is not defined
// manager.print()                             //Angular React
// manager.add('VueJS')
// manager.print()                             //Angular React VueJS


//setTimeout
const fib = [1,2,3,5,8,13];
// for (let i=0; i<fib.length; i++) {
//     setTimeout(() => {
//     console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500);
// }
for (var i=0; i<fib.length; i++) {                  //ES5 closures with var 
    (function(j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`)
            }, 1500);
    }) (i)
    
}