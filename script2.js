'use strict';

// String methods from freecodecamp

const str1 = 'freecodecamp is the best place to learn';
const str2 = ' both frontend and backend development';

// charAt()
console.log(str1.charAt(3));
console.log(str2.charAt(0));

// codePointAt()
console.log(str1.codePointAt(12));
console.log(str2.codePointAt(1));

// concat()
console.log(str1.concat(str2));
console.log(str1.concat(str2).concat(' and also devops'));

// startsWith()
console.log(str1.startsWith('free'));
console.log(str2.startsWith('both'));

// endsWith()
console.log(str1.endsWith('learn'));
console.log(str2.endsWith('t'));

// includes()
console.log(str1.includes(' best '));
console.log(str2.includes('backenddev'));

// both methods return character based on code point
console.log(String.fromCharCode(40));
console.log(String.fromCharCode(41));

console.log(String.fromCodePoint(37));
console.log(String.fromCodePoint(181));

// indexOf() => returns index of first occurence
console.log(str2.indexOf('end'));

// lastIndexOf() => returns index of last occurence
console.log(str2.lastIndexOf('end'));

// returns -1 if the substring is not found
console.log(str1.indexOf('camps'));
console.log(str2.indexOf('devops'));

// repeat()
console.log(str1.repeat(3));
console.log('Cool '.repeat(10));

// replace() => replaces first occurence only
console.log(str2.replace('end', 'start'));

// replaces all the occurences because /end/g is a regular expression
console.log(str2.replace(/end/g, 'start'));
console.log(str1.replace(/ /g, '--'));

const str3 = 'a and b and c and d or e or f and g';

console.log(str3.replace('and', '&&'));
console.log(str3.replace('or', '||'));
console.log(str3.replace(/and/g, '&&').replace(/or/g, '||')); // will replace all the occurences of 'and' and 'or'

// search() => returns the index of substring if it's found
console.log(str1.search('code'));
console.log(str2.search('end'));

// returns -1 if the substring is not found
console.log(str1.search('end'));
console.log(str2.search('@@'));

// slice()
console.log(str1.slice(0, str1.indexOf(' ')));
console.log(str1.slice(str1.indexOf('b'), str1.lastIndexOf('t')));
console.log(str2.slice(str2.indexOf('f'), str2.lastIndexOf(' ')));

// substring()
console.log(str1.substring(0, 8));
console.log(str2.substring(6, 26));
console.log(str2.substring(str2.lastIndexOf('d')));
console.log(str2.substring(str2.lastIndexOf('b'), str2.lastIndexOf(' ')));

// both methods accept startIndex, endIndex and returns a substring

// split() => convets a string into an array
console.log(str2.split(' '));
console.log(str3.split(' and '));
console.log(str3.split(' or '));
console.log(str1.split(' '));

// toLowerCase()
console.log(str1.toLowerCase());

// toUpperCase()
console.log(str2.toUpperCase());
console.log(str1.slice(0, str1.indexOf(' ')).toUpperCase());
console.log(str2.slice(str2.lastIndexOf('d')).toUpperCase());

const str4 = '      Shubham Purwar             ';
console.log(str4.length);

// trim()
let str5 = str4.trim();
console.log(str5, str5.length);

// trimStart()
let str6 = str4.trimStart();
console.log(str6, str6.length);

// trimEnd()
let str7 = str4.trimEnd();
console.log(str7, str7.length);

// padStart()
console.log(str5.padStart(25, '💔'));
console.log(str1.padStart(50, '-'));

// padEnd()
console.log(str5.padEnd(20, '='));
console.log(str5.padStart(20, '`').padEnd(30, '_').padStart(35, 'A'));

let string = 'Hello JS!'; // primitive
console.log(string, typeof string);

// primitive will get converted into an object
string = new String(string);
console.log(string, typeof string);

// valueOf() => returns the primitive value of an object
console.log(string.valueOf());

const string2 = new String('Fine');
console.log(string2, string2.valueOf());

// characters of strings can be accessed either by using charAt() or indices

// using charAt()
const str8 = 'Online JS course';
console.log(str8.charAt(0));
console.log(str8.charAt(10));

// using indices
console.log(str8[0]);
console.log(str8[7]);
console.log(str8[3]);

// spread operator works on strings
let str9 = [...'Java'];
console.log(str9);

str9 = [...str8];
console.log(str9, str9.length);
