function flattenArray(arr) {
    return arr.reduce((a, b) => a.concat(b), []);
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
];

console.log(flattenArray(arr));