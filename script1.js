'use strict';

let str = '     Great JS!   ';

// removes white spaces
console.log(str.trimStart()); // from the start
console.log(str.trimEnd()); // from the end
console.log(str.trim()); // from both the sides

// split() converts a string into an array
// syntax: array.split(dividerString)

let str1 = 'A,B,C,Wow,No';
console.log(str1.split(','));

str1 = 'one+two+fur+12+true';
console.log(str1.split('+'));

console.log('22  90  0'.split('  '));

let str2 = 'Python';
console.log(str2.length);

// padStart(mexLength, fillString) => pads string at the start
// padEnd(mexLength, fillString) => pads string at the end

console.log(str2.padStart(10, '-'));
console.log(str2.padEnd(10, '-'));

console.log(str2.padEnd(15, '0'));
console.log(str2.padStart(12, '&&'));

console.log(str2.padStart(10, '-').padEnd(15, '+').padEnd(20, 0).padStart(30, 'Great'));
