function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = (ms) => {
    return (...args) => {
        return setTimeout(() => f.apply(this, args), ms);
    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.