function deepEqual(obj1, obj2) {

    console.log('Comparing ' + obj1 + ' & ' + obj2);
    if (obj1 === null && obj2 === null) return true;

    if (obj1 === null || obj2 === null) return false;
    if (obj1 === undefined || obj2 === undefined) return false;


    if (typeof obj1 == 'object' && typeof obj2 == 'object') {
        let result = true;

        for (let key of Object.keys(obj1)) {
            if (!(Object.keys(obj2).includes(key))) {
                console.log('Different keys!');
                return false;
            }
            result = result && deepEqual(obj1[key], obj2[key]);
        }

        for (let key of Object.keys(obj2))
            if ((!(Object.keys(obj1).includes(key)))) {
                console.log('Different keys!');
                return false;
            }
        return result;
    }

    if (obj1 === obj2) return true;
    console.log(`${obj1} (type: ${typeof obj1}) is not strictly equal to ${obj2} (type: ${typeof obj2})`);
    return false;
}

console.log(deepEqual({ value: [2, 3], bday: NaN }, { value: [2, 3], bday: null }));