let reg = /abc\+/;

console.log(reg.test('adsfadfabc\+asdf')); // → true 
console.log('eighteen\+');

console.log(/abc/.test("abcde")); // → true 
console.log(/abc/.test("abxde")); // → false

console.log(/[012345]/.test('no number')) // → false
console.log(/[0-9]/.test('number 1')) // → true
console.log(/[A-Z]/.test('no capitalised letter')); // → false

console.log(/'\d+'/.test("'123'"));

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "Original: $&. Reordered: $2 $1"));