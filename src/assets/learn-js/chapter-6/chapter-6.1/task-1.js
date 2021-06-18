const sumTo = (num) => {
    if (num === 1) {
        return num;
    }
    return num + sumTo(num - 1);
}

console.log(sumTo(5000));