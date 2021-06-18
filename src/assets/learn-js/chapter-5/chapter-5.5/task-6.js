function Calculator() {
    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }
    this.calculate = function (exp) {
        let pieces = exp.split(" ");

        let [a, oper, b] = [+pieces[0], pieces[1], +pieces[2]];

        return this.operations[oper](a, b);
    }
    this.addMethods = function (oper, func) {
        this.operations[oper] = func;
    }
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2"));
calc.addMethods("**", (a, b) => a ** b);
console.log(calc.calculate("3 ** 2"));
