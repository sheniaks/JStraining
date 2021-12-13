function fib2 (num) {
    if (num<2) {
        return num;
    }
    return fib2(num-1) + fib2(num-2);
}

console.log(fib2(5));