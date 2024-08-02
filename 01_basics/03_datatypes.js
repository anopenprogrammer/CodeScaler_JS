"use strict"; // treat all JS code as newer version

// Data types

// A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:
let message = "hello";
message = 123456;
// Programming languages that allow such things are called “dynamically typed”

// There are seven basic data types in JavaScript.

// 1. Number
let n = 123;
n = 12.345;
// The number type represents both integer and floating point numbers.
// There are many operations for numbers, e.g. multiplication * , division / , addition + ,subtraction - , and so on.
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
alert( "not a number" / 2 ); // NaN
// Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

// 2. BigInt

// In JavaScript, the “number” type cannot represent integer values larger than 2^53(or less than -2^53 for negatives), that’s a technical limitation caused by their internal representation. That’s about 16 decimal digits, so for most purposes the limitation isn’t a problem, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

// BigInt type was recently added to the language to represent integers of arbitrary length.
// A BigInt is created by appending n to the end of an integer literal:

const bigInt = 1234567890123456789012345678901234567890n;

// Compatability issues
// Right now BigInt is supported in Firefox and Chrome, but not in Safari/IE/Edge.

// 3. String
// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}

// In JavaScript, ${...} is part of a template literal.
// When you use ${...} within a template literal, it allows you to embed expressions or variables within the string.
const name = "World";
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, World!

// There is no character type.
// In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.

// 4. Boolean (logical type)
// The boolean type has only two values: true and false .
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:
let isGreater = 9 > 7 > 5;

// 5. The “null” value
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

// 6. The “undefined” value
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined :
let x;
alert(x); // shows "undefined"

// Technically, it is possible to assign undefined to any variable:
let xy = 123;
xy = undefined;
alert(xy); // "undefined"

// But we don’t recommend doing that. Normally, we use null to assign an “empty” or “unknown” value to a variable, and we use undefined for checks like seeing if a variable has been assigned.

// 7. Symbol

// Typeof Operator
// The typeof operator returns the type of the argument.
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
console.log("Deepak")

// HOMEWORK

// What is the output of the script?
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?
