function arrayToList(arr) {

    if (arr.length == 0) return {};

    let list = { value: arr[arr.length - 1] };

    for (let i = arr.length - 2; i >= 0; i--) {
        list.rest = { ...list };
        list.value = arr[i];
    }

    return list;
}

function listToArray(list) {
    let arr = [];
    if (!('value' in list)) return arr;
    else arr.push(list.value);
    while ('rest' in list) {
        list = { ...list.rest };
        arr.push(list.value);
    };
    return arr;
}

function prepend(e, list) {
    let newList = {
        value: e,
        rest: { ...list },
    };
    return newList;
}

function nth(list, index) {
    if (index < 0) return undefined;

    for (let i = 0; i < index; i++) {
        if (!('rest' in list)) return undefined;
        list = { ...list.rest };
    }
    return list.value;
}

function recursiveNth(list, index) {
    function valueOf(list, index) {
        if (index == 0) return list.value;
        else if (!('rest' in list) || index < 0) return undefined;
        else return valueOf({ ...list.rest }, index - 1);
    }
    return valueOf(list, index);
}

let newList = arrayToList([1, 2, 3, 4])
console.log(newList);
console.log(listToArray(newList));
console.log(prepend(5, newList));
console.log(nth(newList, 2));
console.log(recursiveNth(newList, 3));