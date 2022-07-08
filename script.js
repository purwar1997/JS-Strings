'use strict';

let googol = '1' + '0'.repeat(30);
console.log(googol);
console.log(Number(googol));
console.log(BigInt(googol));

// strings
// '' and "" strings are similar to each other
// methods applied on strings do not modify the original string. They always returns a new string

// unicode characters
let dollar = '$';
let love = '❤';
let breakup = '💔';

console.log(dollar.length);
console.log(love.length);
console.log(breakup.length);

// escape sequences
// \n -> new line, \u -> unicode

console.log('Shubham\nSuyash\nRaja');

// string methods
let str = 'Hello, JavaScript';

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

// to find character of a string
console.log(str.charAt(0));
console.log(str.charAt(9));

// to find index of a character
console.log(str.indexOf('Java')); // first occurence
console.log(str.indexOf(','));
console.log(str.indexOf('Hello'));
console.log(str.indexOf('llo'));

console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l')); // last occurence

let str1 = '12oop21err0021';

console.log(str1.lastIndexOf('1'));
console.log(str1.lastIndexOf('0'));
console.log(str1.indexOf('1222')); // returns -1 if the character is not found

// indexOf() will search for character after specified position
console.log(str1.indexOf('op', 3));
console.log(str1.indexOf('21', 8));
console.log(str1.indexOf('oop', 5));
console.log(str1.indexOf('err', 5));

// startsWith(), endsWith() and includes() returns either true or false
console.log(str.startsWith('Hello'));
console.log(str1.startsWith('12'));

console.log(str1.endsWith('0021'));
console.log(str1.endsWith('00021'));

console.log(str1.includes('ooop'));
console.log(str1.includes('err'));
console.log(str1.includes('12oo'));

let str2 = '12oopjavaoop212oop3434';

// replaces first occurence
console.log(str2.replace('oop', 'clear'));
console.log(str2.replace('34', '💔'));

// repeat(n) => repeats a string n times
console.log(str.repeat(3));
console.log(' repeat '.repeat(5));

// concatenates two arrays
console.log(str.concat(', Python').concat(' and Java'));
console.log('Shubham '.concat('Purwar'));

// returns value or content of a string
console.log(str.valueOf());
console.log(str1.valueOf());
