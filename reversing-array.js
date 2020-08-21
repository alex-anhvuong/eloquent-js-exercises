let arr = [];
for (i = 0; i < 1e7; i++) arr.push(i);

function reverseArray(arr) {
    let rArr = [];
    for (let i = 0; i < arr.length; i++) {
        rArr[i] = arr[arr.length - i - 1];
    }
    return rArr;
    // return arr.reverse();
}

function reverseArrayInPlace(arr) {
    let len = arr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let tmp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = tmp;
    }
}

let t0 = performance.now();
reverseArray(arr);
let t1 = performance.now();
console.log("Call to reverseArray took " + (t1 - t0) + " milliseconds");

t0 = performance.now();
reverseArrayInPlace(arr)
t1 = performance.now();
console.log("Call to reverseArrayInPlace took " + (t1 - t0) + " milliseconds");

console.log(arr);