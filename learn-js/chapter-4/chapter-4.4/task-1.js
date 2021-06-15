let calculator = {
    read() {
        this.a = +promt("Первое число: ");
        this.b = +promt("Второе число: ");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());