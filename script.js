"use strict";

let googol = "1" + "0".repeat(30);
console.log(googol);
console.log(Number(googol));
console.log(BigInt(googol));

// strings
// '' and "" are similar to each other
// methods applied on strings do not modify the original string. They always returns a new string

// unicode characters
let dollar = "$";
let love = "❤";
let breakup = "💔";

console.log(dollar.length);
console.log(love.length);
console.log(breakup.length);

// escape sequences
// /n -> new line, \u -> unicode

console.log("Shubham\nSuyash\nRaja");

// string methods
let str = "Hello, JavaScript";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

// returns a substring
console.log(str.substring());
console.log(str.substring(0, 5));
console.log(str.substring(7, 11));

// slice() and substring() => both works the same way
console.log(str.slice(3, 8));
console.log(str.slice(8, 10));

// slice() accepts -ve values
console.log(str.slice(-9, -1));
console.log(str.slice(0, -10));
