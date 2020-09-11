class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    let r = Math.random();
    if (r <= 0.2) return a * b;
    else
        throw new MultiplicatorUnitFailure('Error: multiplicator unit failure');
}

function main() {
    for (;;) {
        try {
            return console.log(primitiveMultiply(1, 2));
        } catch (e) {
            console.log(e.message);
        }
    }
}

main();