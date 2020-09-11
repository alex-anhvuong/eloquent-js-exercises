// Fill in this regular expression.
// This validate a Javascript-style number
let number = /^(\+|-)?\d*(\d\.|\.\d)?\d*([eE](\+|-)?\d+)?$/;

// Tests:
let error = false;
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3e2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        error = true;
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]) {
    if (number.test(str)) {
        error = true;
        console.log(`Incorrectly accepted '${str}'`);
    }
}

if (!error) console.log('Success!');