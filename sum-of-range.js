function range(start, end, step = 1) {
    let arr = [];
    for (let i = start; start < step ? i <= end : i >= end; i += step) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

function sum(arr) {
    let sum = 0;

    for (let number of arr) {
        sum += number;
    }
    return sum;
}

console.log(sum(range(10, 2, -2)));