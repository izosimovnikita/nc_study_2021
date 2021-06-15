
function aclean(arr) {
    let map = new Map();

    for (const elem of arr) {
        let sorted = elem.toLowerCase().split("").sort().join("");
        map.set(sorted, elem);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );