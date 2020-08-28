
//  the problem
let synonyms = {
    'hello': 'hi',
    'hasOwnProperty': 'element in map',
}

const hasOwnPropertySymbol = Symbol('hasOwnProperty');
synonyms[hasOwnProperty] = function (p) { return this.hasOwnProperty(p); };

console.log(synonyms[hasOwnProperty]('something'));


// let synonyms = new Map();
// synonyms.set('hello', 'hi');
// synonyms.set('hasOwnProperty', 'element in map');
// console.log(synonyms.hasOwnProperty('something'));