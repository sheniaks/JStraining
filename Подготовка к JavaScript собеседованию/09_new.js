function Cat(color,name) {
    this.color=color;
    this.name=name;
}

// const cat = new Cat('black', 'cat')
// console.log(cat);                       //Cat {color: 'black', name: 'cat'}

// function myNew(constructor, ...args) {
//     const obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     return constructor.apply(obj, args) || obj;
// }

// const cat = myNew(Cat, 'black', 'MC');
// console.log(cat);                           //Cat {color: 'black', name: 'MC'}

// const cat = Cat ();
// console.log(cat);    //undefined

const cat = new Cat ();
console.log(cat);       //Cat {color: undefined, name: undefined}