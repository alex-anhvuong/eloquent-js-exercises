function every(arr, test) {
    for (let element of arr) {
        if (!test(element)) return false;
    }

    return true;
}

function everyWSomeMethod(arr, test) {
    return !arr.some(test);
}

let arr = [1, 3, 5, 7, 10];
let test = i => i % 2 != 0;
let negateTest = i => i % 2 == 0;

console.log(everyWSomeMethod(arr, negateTest));