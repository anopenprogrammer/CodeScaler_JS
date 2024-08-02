// Type Conversions
// Most of the time, operators and functions automatically convert the values given to them to the right type.
// For example, alert automatically converts any value to a string to show it.

// 1. String Conversion
// String conversion happens when we need the string form of a value.
// We can also call the String(value) function to convert a value to a string:

let value = true;
console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string

// String conversion is mostly obvious. A false becomes "false" , null becomes "null" ,etc.

// 2. Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.
// For example, when division / is applied to non-numbers:

console.log("6" / "2"); // 3, strings are converted to numbers;

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

// Numeric conversion rules:
// Value                    Becomes…
// undefined                NaN
// null                     0
// true and false           1 and 0

console.log(Number(" 123 ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// 3. Boolean Conversion

// Boolean conversion is the simplest one.
// The conversion rule:
// Values that are intuitively “empty”, like 0 , an empty string, null , undefined , and NaN ,
// become false .
// Other values become true .

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

console.log( Boolean("0") ); 

// HOMEWORK

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1

