function test1() {
    return {
        test: "hello"
    };
}


function test2() {
    return              // returns here
    {
        test: "hello"   // dead code
    };
}

console.log(test1());   //{test: 'hello'}
console.log(test2());   // undefined
