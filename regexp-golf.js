// Fill in the regular expressions

verify(/ca(r|t)/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/\b\w{6,}\b/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(/\b[^e\s]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    let error = false;
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        error = true;
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        error = true;
        console.log(`Unexpected match for '${str}'`);
    }
    if (!error) console.log('Test success!');
}