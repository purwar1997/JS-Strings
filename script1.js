'use strict';

let str = '     Great JS!   ';

// removes white spaces
console.log(str.trimStart()); // from the start
console.log(str.trimEnd()); // from the end
console.log(str.trim()); // from both the sides

// split() converts a string into an array
// syntax: string.split(dividerString)

let str1 = 'A,B,C,Wow,No';
console.log(str1.split(','));

str1 = 'one+two+fur+12+true';
console.log(str1.split('+'));

console.log('22  90  0'.split('  '));

let str2 = 'Python';
console.log(str2.length);

// padStart(mexLength, fillString) => pads fillString at the start
// padEnd(mexLength, fillString) => pads fillString at the end

console.log(str2.padStart(10, '-'));
console.log(str2.padEnd(10, '-'));

console.log(str2.padEnd(15, '0'));
console.log(str2.padStart(12, '&&'));

console.log(str2.padStart(10, '-').padEnd(15, '+').padEnd(20, 0).padStart(30, 'Great'));

let email = 'shubham01@gmail.com';
console.log(email.endsWith('@gmail.com'));

email = 'naval@ai.com';
console.log(email.endsWith('gmail.com'));

console.log(email.endsWith('.com'));

let phone = '+91-9897887871';
console.log(phone.startsWith('+91'));

phone = '8171619162';
console.log(phone.startsWith('+91'));

// charAt(index) => returns character at a specific index
console.log(email.charAt(5));
console.log(phone.charAt(3));

// Unicode assigns a unique number to every character which is called code point
// codePointAt(index) returns code point of character at a specific index

console.log(email.codePointAt(0));
console.log(phone.codePointAt(2));
console.log('Hi!'.codePointAt(2));

const account = acc => acc.padStart(16, '0');

const acc1 = account('HDFC00123456');
const acc2 = account('SBI0016468090');
const acc3 = account('PNB0163002100130');

console.log(acc1, acc2, acc3);

const maskCardNo = cardNo => cardNo.slice(0, 8).padEnd(16, '*');

console.log(maskCardNo('234578909087'));
console.log(maskCardNo('90876582232'));

const maskPassword = password => ''.padStart(password.length, '*');

console.log(maskPassword('pass345'));
console.log(maskPassword('poker345@upi'));

// string interpolation: inserting variables or expression values inside string
let name = 'Shubham',
  age = 24,
  isEmployed = true;

let about = `${name} is ${age} years old and currently ${isEmployed ? '' : 'un'}employed`;
console.log(about);

// \u -> escape sequence which represents unicode character
let unicode = '\u0051';
console.log(unicode, unicode.length);

const lang = '\u004A\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074';
console.log(lang, lang.length);

// to get raw strings with escape sequences, use String.raw
let str3 = String.raw`\u0051`;
console.log(str3, str3.length);

let lang1 = String.raw`\u004A\u0061\u0076\u0061\u0073\u0063\u0072\u0069\u0070\u0074`;
console.log(lang1, lang1.length);

let languages = `\nPython\nJava\nC\nC++\nRust\nDart`;
console.log(languages);

let languages2 = String.raw`\nPython\nJava\nC\nC++\nRust\nDart`;
console.log(languages2, languages2.length);

// \t -> tab space
let name3 = `\tAman`;
console.log(name3, name3.length);

name3 = String.raw`\t\t${name3}`;
console.log(name3, name3.length);
