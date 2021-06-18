function shuffle(arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let random = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[random]] = [arr[random], arr[i]]
    }
}

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);
