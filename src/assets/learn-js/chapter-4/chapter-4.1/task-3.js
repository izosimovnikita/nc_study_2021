function sum(obj) {
    let sum = 0;
    for (let key of obj) {
        sum += obj[key];
    }

    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

alert(sum(salaries));