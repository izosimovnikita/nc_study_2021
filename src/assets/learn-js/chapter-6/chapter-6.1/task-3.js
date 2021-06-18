const fib = (num) => {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

console.log(fib(7))