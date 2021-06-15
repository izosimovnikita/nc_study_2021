function unique(arr) {
    const res = [];

    arr.forEach(item => {
        if (!res.includes(item)) {
            res.push(item);
        }
    })

    return res;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O