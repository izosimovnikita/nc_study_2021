function sum(num) {
    let curSum = num;

    function innerFunc(num2) {
        curSum += num2;
        return innerFunc;
    }

    innerFunc[Symbol.toPrimitive] = (hint) => {
        if (hint === "string") {
            return curSum;
        }
    }

    return innerFunc;
}

console.log( sum(0)(1)(2)(3)(4)(5) ); // 15